// Основная логика приложения кибербезопасности

class CyberSecurityApp {
    constructor() {
        this.currentScreen = 'navigation';
        this.screensaverTimeout = null;
        this.screensaverDelay = 90000; // 90 секунд
        this.isScreensaverActive = false;
        this.lastActivity = Date.now();
        this.init();
    }

    init() {
        this.bindEvents();
        this.startActivityMonitoring();
        this.initializeModules();
        
        // Показать скринсейвер при загрузке
        this.showScreensaver();
    }

    bindEvents() {
        // Навигация между экранами
        document.querySelectorAll('.nav-tile').forEach(tile => {
            tile.addEventListener('click', (e) => {
                const screenId = e.currentTarget.dataset.screen;
                this.showScreen(screenId);
            });
        });

        // Кнопки "Домой"
        document.querySelectorAll('.home-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.showScreen('navigation');
            });
        });

        // Кнопки скринсейвера
        document.querySelectorAll('.screensaver-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.showScreensaver();
            });
        });

        // Клик по скринсейверу для выхода
        document.getElementById('screensaver').addEventListener('click', () => {
            this.hideScreensaver();
        });

        // Табы дашбордов
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = e.currentTarget.dataset.tab;
                this.showTab(tabId);
            });
        });

        // Отслеживание активности пользователя
        document.addEventListener('click', () => this.updateActivity());
        document.addEventListener('touchstart', () => this.updateActivity());
        document.addEventListener('mousemove', () => this.updateActivity());
        document.addEventListener('keydown', () => this.updateActivity());

        // Блокировка контекстного меню и выделения
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        document.addEventListener('selectstart', (e) => e.preventDefault());
        document.addEventListener('dragstart', (e) => e.preventDefault());

        // Блокировка системных жестов
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        // Обработка изменения размера окна
        window.addEventListener('resize', () => {
            if (chartsManager) {
                chartsManager.resizeCharts();
            }
        });
    }

    showScreen(screenId) {
        // Скрыть все экраны
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Показать выбранный экран
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
            
            // Инициализация контента экрана
            this.initializeScreenContent(screenId);
        }

        this.updateActivity();
    }

    showTab(tabId) {
        // Скрыть все табы
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Показать выбранный таб
        const targetTab = document.getElementById(`tab-${tabId}`);
        const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
        
        if (targetTab && targetBtn) {
            targetTab.classList.add('active');
            targetBtn.classList.add('active');
            
            // Инициализация графиков для таба
            this.initializeTabContent(tabId);
        }

        this.updateActivity();
    }

    initializeScreenContent(screenId) {
        switch (screenId) {
            case 'dashboards':
                // Показать первый таб по умолчанию
                this.showTab('incidents');
                break;
            case 'presentation1':
            case 'presentation2':
            case 'presentation3':
                // Презентации инициализируются автоматически
                break;
        }
    }

    initializeTabContent(tabId) {
        // Небольшая задержка для корректного рендеринга
        setTimeout(() => {
            switch (tabId) {
                case 'incidents':
                    chartsManager.createIncidentsChart();
                    break;
                case 'sectors':
                    chartsManager.createSectorsChart();
                    break;
                case 'motivation':
                    chartsManager.createMotivationChart();
                    break;
                case 'vendors':
                    chartsManager.createVendorsChart();
                    break;
                case 'ai-security':
                    chartsManager.createAISecurityChart();
                    break;
                case 'kanban':
                    if (!kanbanBoard) {
                        initKanban();
                    }
                    break;
            }
        }, 200);
    }

    initializeModules() {
        // Инициализация презентаций
        initPresentations();
    }

    showScreensaver() {
        const screensaver = document.getElementById('screensaver');
        const app = document.getElementById('app');
        const video = document.getElementById('screensaver-video');
        
        screensaver.classList.remove('hidden');
        app.classList.add('hidden');
        
        // Запуск видео
        video.currentTime = 0;
        video.play().catch(e => {
            console.log('Автовоспроизведение видео заблокировано:', e);
        });
        
        this.isScreensaverActive = true;
        this.clearScreensaverTimeout();
    }

    hideScreensaver() {
        const screensaver = document.getElementById('screensaver');
        const app = document.getElementById('app');
        const video = document.getElementById('screensaver-video');
        
        screensaver.classList.add('hidden');
        app.classList.remove('hidden');
        
        // Остановка видео
        video.pause();
        
        this.isScreensaverActive = false;
        this.showScreen('navigation');
        this.updateActivity();
        
        // Обновление графиков после выхода из скринсейвера
        setTimeout(() => {
            if (window.chartsManager) {
                chartsManager.resizeCharts();
            }
        }, 100);
    }

    updateActivity() {
        this.lastActivity = Date.now();
        this.resetScreensaverTimeout();
    }

    startActivityMonitoring() {
        // Проверка активности каждую секунду
        setInterval(() => {
            if (!this.isScreensaverActive) {
                const timeSinceActivity = Date.now() - this.lastActivity;
                if (timeSinceActivity >= this.screensaverDelay) {
                    this.showScreensaver();
                }
            }
        }, 1000);
    }

    resetScreensaverTimeout() {
        this.clearScreensaverTimeout();
        
        if (!this.isScreensaverActive) {
            this.screensaverTimeout = setTimeout(() => {
                this.showScreensaver();
            }, this.screensaverDelay);
        }
    }

    clearScreensaverTimeout() {
        if (this.screensaverTimeout) {
            clearTimeout(this.screensaverTimeout);
            this.screensaverTimeout = null;
        }
    }

    // Служебные функции для отладки
    setScreensaverDelay(seconds) {
        this.screensaverDelay = seconds * 1000;
        console.log(`Задержка скринсейвера установлена: ${seconds} секунд`);
    }

    forceScreensaver() {
        this.showScreensaver();
    }

    getStatus() {
        return {
            currentScreen: this.currentScreen,
            isScreensaverActive: this.isScreensaverActive,
            screensaverDelay: this.screensaverDelay / 1000,
            timeSinceActivity: (Date.now() - this.lastActivity) / 1000
        };
    }
}

// Инициализация приложения при загрузке страницы
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new CyberSecurityApp();
    
    // Глобальные функции для отладки (доступны в консоли)
    window.cybersec = {
        setScreensaverDelay: (seconds) => app.setScreensaverDelay(seconds),
        forceScreensaver: () => app.forceScreensaver(),
        hideScreensaver: () => app.hideScreensaver(),
        showScreen: (screenId) => app.showScreen(screenId),
        getStatus: () => app.getStatus()
    };
    
    console.log('Приложение кибербезопасности загружено');
    console.log('Доступные команды в консоли: window.cybersec');
});

// Обработка ошибок
window.addEventListener('error', (e) => {
    console.error('Ошибка приложения:', e.error);
});

// Предотвращение закрытия приложения
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});

// Блокировка горячих клавиш системы
document.addEventListener('keydown', (e) => {
    // Блокировка F11 (полноэкранный режим)
    if (e.key === 'F11') {
        e.preventDefault();
    }
    
    // Блокировка Alt+Tab
    if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
    }
    
    // Блокировка Ctrl+Alt+Del (частично)
    if (e.ctrlKey && e.altKey && e.key === 'Delete') {
        e.preventDefault();
    }
    
    // Блокировка Windows key
    if (e.key === 'Meta') {
        e.preventDefault();
    }
});

// Принудительный полноэкранный режим (если поддерживается)
function enterKioskMode() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(e => {
            console.log('Не удалось войти в полноэкранный режим:', e);
        });
    }
}

// Автоматический вход в полноэкранный режим при первом взаимодействии
document.addEventListener('click', function enableKiosk() {
    enterKioskMode();
    document.removeEventListener('click', enableKiosk);
}, { once: true });
