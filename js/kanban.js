// Канбан-доска для управления инцидентами ИБ

class KanbanBoard {
    constructor() {
        this.zoom = 1;
        this.minZoom = 0.5;
        this.maxZoom = 2;
        this.zoomStep = 0.1;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.init();
    }

    init() {
        this.renderBoard();
        this.bindEvents();
    }

    renderBoard() {
        const boardContainer = document.getElementById('kanban-board');
        boardContainer.innerHTML = '';

        kanbanData.columns.forEach(column => {
            const columnElement = this.createColumn(column);
            boardContainer.appendChild(columnElement);
        });
    }

    createColumn(column) {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'kanban-column';
        columnDiv.innerHTML = `
            <div class="column-header">
                ${column.title}
                <span class="card-count">(${column.cards.length})</span>
            </div>
            <div class="column-cards" id="column-${column.id}">
                ${column.cards.map(card => this.createCard(card)).join('')}
            </div>
        `;
        return columnDiv;
    }

    createCard(card) {
        const priorityClass = `card-priority-${card.priority}`;
        const tags = card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
        
        return `
            <div class="kanban-card ${priorityClass}" data-card-id="${card.id}">
                <div class="card-header" onclick="toggleCardDetails('${card.id}')">
                    <div class="card-title">${card.title}</div>
                    <div class="card-toggle">▼</div>
                </div>
                <div class="card-summary">
                    <div class="card-description-short">${card.description.substring(0, 50)}...</div>
                    <div class="card-tags">${tags}</div>
                </div>
                <div class="card-details" id="details-${card.id}">
                    <div class="card-description-full">${card.description}</div>
                    <div class="card-meta">
                        <span class="card-priority">Приоритет: ${this.getPriorityText(card.priority)}</span>
                    </div>
                </div>
            </div>
        `;
    }

    getPriorityText(priority) {
        const priorities = {
            'high': 'Высокий',
            'medium': 'Средний', 
            'low': 'Низкий'
        };
        return priorities[priority] || priority;
    }

    bindEvents() {
        // Управление зумом
        document.getElementById('zoom-in').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoom-out').addEventListener('click', () => this.zoomOut());
        document.getElementById('zoom-reset').addEventListener('click', () => this.resetZoom());

        // Панорамирование мышью
        const board = document.getElementById('kanban-board');
        
        board.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startX = e.pageX - board.offsetLeft;
            this.startY = e.pageY - board.offsetTop;
            this.scrollLeft = board.scrollLeft;
            this.scrollTop = board.scrollTop;
            board.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - board.offsetLeft;
            const y = e.pageY - board.offsetTop;
            const walkX = (x - this.startX) * 2;
            const walkY = (y - this.startY) * 2;
            board.scrollLeft = this.scrollLeft - walkX;
            board.scrollTop = this.scrollTop - walkY;
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            board.style.cursor = 'grab';
        });

        // Зум колесом мыши
        board.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                this.zoomIn();
            } else {
                this.zoomOut();
            }
        });

        // Тач-события для мобильных устройств
        this.bindTouchEvents(board);

        // Функция переключения деталей карточки будет глобальной
        window.toggleCardDetails = (cardId) => {
            const details = document.getElementById(`details-${cardId}`);
            const toggle = document.querySelector(`[data-card-id="${cardId}"] .card-toggle`);
            
            if (details.classList.contains('expanded')) {
                details.classList.remove('expanded');
                toggle.textContent = '▼';
            } else {
                details.classList.add('expanded');
                toggle.textContent = '▲';
            }
        };
    }

    bindTouchEvents(board) {
        let initialDistance = 0;
        let initialZoom = 1;

        board.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                // Начало жеста pinch-to-zoom
                initialDistance = this.getDistance(e.touches[0], e.touches[1]);
                initialZoom = this.zoom;
            } else if (e.touches.length === 1) {
                // Начало панорамирования
                this.isDragging = true;
                this.startX = e.touches[0].pageX - board.offsetLeft;
                this.startY = e.touches[0].pageY - board.offsetTop;
                this.scrollLeft = board.scrollLeft;
                this.scrollTop = board.scrollTop;
            }
        });

        board.addEventListener('touchmove', (e) => {
            e.preventDefault();
            
            if (e.touches.length === 2) {
                // Pinch-to-zoom
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                const scale = currentDistance / initialDistance;
                const newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, initialZoom * scale));
                this.setZoom(newZoom);
            } else if (e.touches.length === 1 && this.isDragging) {
                // Панорамирование
                const x = e.touches[0].pageX - board.offsetLeft;
                const y = e.touches[0].pageY - board.offsetTop;
                const walkX = (x - this.startX) * 2;
                const walkY = (y - this.startY) * 2;
                board.scrollLeft = this.scrollLeft - walkX;
                board.scrollTop = this.scrollTop - walkY;
            }
        });

        board.addEventListener('touchend', () => {
            this.isDragging = false;
        });
    }

    getDistance(touch1, touch2) {
        const dx = touch1.pageX - touch2.pageX;
        const dy = touch1.pageY - touch2.pageY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    zoomIn() {
        const newZoom = Math.min(this.maxZoom, this.zoom + this.zoomStep);
        this.setZoom(newZoom);
    }

    zoomOut() {
        const newZoom = Math.max(this.minZoom, this.zoom - this.zoomStep);
        this.setZoom(newZoom);
    }

    resetZoom() {
        this.setZoom(1);
    }

    setZoom(zoom) {
        this.zoom = zoom;
        const board = document.getElementById('kanban-board');
        board.style.transform = `scale(${zoom})`;
        
        // Обновление кнопки сброса зума
        const resetBtn = document.getElementById('zoom-reset');
        resetBtn.textContent = `${Math.round(zoom * 100)}%`;
    }


    // Добавление новой карточки (для будущего функционала)
    addCard(columnId, cardData) {
        const column = kanbanData.columns.find(col => col.id === columnId);
        if (column) {
            column.cards.push(cardData);
            this.renderBoard();
        }
    }

    // Перемещение карточки между колонками (для будущего функционала)
    moveCard(cardId, fromColumnId, toColumnId) {
        const fromColumn = kanbanData.columns.find(col => col.id === fromColumnId);
        const toColumn = kanbanData.columns.find(col => col.id === toColumnId);
        
        if (fromColumn && toColumn) {
            const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
            if (cardIndex !== -1) {
                const card = fromColumn.cards.splice(cardIndex, 1)[0];
                toColumn.cards.push(card);
                this.renderBoard();
            }
        }
    }
}

// Инициализация канбан-доски
let kanbanBoard;

function initKanban() {
    kanbanBoard = new KanbanBoard();
}

// Стили для модального окна (добавляются динамически)
const modalStyles = `
    .card-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background: white;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
        z-index: 1;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        border-bottom: 1px solid #e2e8f0;
    }

    .modal-header h3 {
        margin: 0;
        font-size: 1.5rem;
        color: #1e293b;
    }

    .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        color: #64748b;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .modal-close:hover {
        background: #f1f5f9;
        color: #1e293b;
    }

    .modal-body {
        padding: 30px;
    }

    .modal-body p {
        margin-bottom: 15px;
        font-size: 1.1rem;
        color: #64748b;
        line-height: 1.5;
    }

    .modal-body strong {
        color: #1e293b;
    }
`;

// Добавление стилей в документ
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
