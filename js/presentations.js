// Данные и логика для презентаций по кибербезопасности

// Презентация 1: Угрозы и защита
const presentation1Slides = [
    {
        title: "Современные киберугрозы",
        subtitle: "Обзор актуальных угроз информационной безопасности",
        content: `
            <p>В 2025 году киберугрозы продолжают эволюционировать, становясь все более изощренными и целенаправленными.</p>
            <ul>
                <li>Рост числа инцидентов на 13% по сравнению с 2024 годом</li>
                <li>Увеличение атак на критическую инфраструктуру</li>
                <li>Активное использование ИИ злоумышленниками</li>
            </ul>
        `
    },
    {
        title: "Типы киберугроз",
        subtitle: "Классификация основных видов атак",
        content: `
            <ul>
                <li><strong>Вредоносное ПО:</strong> шифровальщики, трояны, шпионское ПО</li>
                <li><strong>Социальная инженерия:</strong> фишинг, претекстинг, приманки</li>
                <li><strong>Атаки на инфраструктуру:</strong> DDoS, атаки на IoT устройства</li>
                <li><strong>Инсайдерские угрозы:</strong> злоумышленники внутри организации</li>
                <li><strong>APT-группы:</strong> целенаправленные долгосрочные атаки</li>
            </ul>
        `
    },
    {
        title: "Шифровальщики",
        subtitle: "Ransomware - главная угроза 2025 года",
        content: `
            <ul>
                <li><strong>Двойное вымогательство:</strong> шифрование + угроза публикации</li>
                <li><strong>Ransomware-as-a-Service:</strong> аренда вредоносного ПО</li>
                <li><strong>Целевые атаки:</strong> на критическую инфраструктуру</li>
                <li><strong>Новые техники:</strong> использование легитимных инструментов</li>
                <li><strong>Средний ущерб:</strong> 4.45 млн долларов за инцидент</li>
            </ul>
        `
    },
    {
        title: "Векторы атак",
        subtitle: "Основные способы проникновения",
        content: `
            <ul>
                <li><strong>Email (67%):</strong> фишинговые письма с вложениями</li>
                <li><strong>Веб-приложения (23%):</strong> эксплуатация уязвимостей</li>
                <li><strong>Съемные носители (5%):</strong> USB-устройства</li>
                <li><strong>Удаленный доступ (3%):</strong> компрометация VPN</li>
                <li><strong>Другие (2%):</strong> физический доступ, поставщики</li>
            </ul>
        `
    },
    {
        title: "APT-группы",
        subtitle: "Продвинутые постоянные угрозы",
        content: `
            <ul>
                <li><strong>Характеристики:</strong> долгосрочное присутствие в сети</li>
                <li><strong>Цели:</strong> государственные секреты, интеллектуальная собственность</li>
                <li><strong>Методы:</strong> zero-day эксплойты, социальная инженерия</li>
                <li><strong>География:</strong> международные группировки</li>
                <li><strong>Обнаружение:</strong> в среднем 287 дней до выявления</li>
            </ul>
        `
    },
    {
        title: "IoT и мобильные угрозы",
        subtitle: "Новые векторы атак",
        content: `
            <ul>
                <li><strong>IoT-ботнеты:</strong> миллионы зараженных устройств</li>
                <li><strong>Мобильные банкеры:</strong> кража финансовых данных</li>
                <li><strong>Поддельные приложения:</strong> в официальных магазинах</li>
                <li><strong>5G уязвимости:</strong> новые возможности для атак</li>
                <li><strong>Умные города:</strong> атаки на городскую инфраструктуру</li>
            </ul>
        `
    },
    {
        title: "Эшелонированная защита",
        subtitle: "Многоуровневая система безопасности",
        content: `
            <ul>
                <li><strong>Периметр:</strong> межсетевые экраны, IPS/IDS</li>
                <li><strong>Сеть:</strong> сегментация, мониторинг трафика</li>
                <li><strong>Конечные точки:</strong> антивирусы, EDR-решения</li>
                <li><strong>Приложения:</strong> WAF, контроль доступа</li>
                <li><strong>Данные:</strong> шифрование, DLP-системы</li>
                <li><strong>Пользователи:</strong> обучение, двухфакторная аутентификация</li>
            </ul>
        `
    },
    {
        title: "Рекомендации по защите",
        subtitle: "Ключевые меры безопасности",
        content: `
            <ul>
                <li>Регулярное обновление программного обеспечения</li>
                <li>Использование современных средств защиты</li>
                <li>Обучение сотрудников основам кибербезопасности</li>
                <li>Создание и тестирование планов реагирования</li>
                <li>Регулярный аудит систем безопасности</li>
                <li>Резервное копирование критически важных данных</li>
            </ul>
        `
    }
];

// Презентация 2: Безопасность данных
const presentation2Slides = [
    {
        title: "Защита персональных данных",
        subtitle: "Соответствие требованиям законодательства",
        content: `
            <p>Обеспечение безопасности персональных данных является приоритетной задачей любой организации.</p>
            <ul>
                <li>Соблюдение требований 152-ФЗ</li>
                <li>Классификация и категорирование данных</li>
                <li>Контроль доступа к информации</li>
            </ul>
        `
    },
    {
        title: "Классификация данных",
        subtitle: "Категории защищаемой информации",
        content: `
            <ul>
                <li><strong>Персональные данные:</strong> ФИО, паспортные данные, биометрия</li>
                <li><strong>Коммерческая тайна:</strong> технологии, клиентские базы</li>
                <li><strong>Государственная тайна:</strong> сведения особой важности</li>
                <li><strong>Банковская тайна:</strong> финансовая информация клиентов</li>
                <li><strong>Врачебная тайна:</strong> медицинские данные пациентов</li>
            </ul>
        `
    },
    {
        title: "Технологии шифрования",
        subtitle: "Криптографическая защита информации",
        content: `
            <ul>
                <li><strong>Симметричное шифрование:</strong> AES-256, ГОСТ 28147-89</li>
                <li><strong>Асимметричное шифрование:</strong> RSA, ГОСТ Р 34.10</li>
                <li><strong>Хеширование:</strong> SHA-256, ГОСТ Р 34.11</li>
                <li><strong>Цифровые подписи:</strong> обеспечение целостности</li>
                <li><strong>PKI-инфраструктура:</strong> управление ключами</li>
            </ul>
        `
    },
    {
        title: "Квантовая криптография",
        subtitle: "Защита от квантовых компьютеров",
        content: `
            <ul>
                <li><strong>Квантовая угроза:</strong> взлом современных алгоритмов</li>
                <li><strong>Post-quantum криптография:</strong> устойчивые алгоритмы</li>
                <li><strong>Квантовое распределение ключей:</strong> QKD технологии</li>
                <li><strong>Гибридные решения:</strong> классическая + квантовая защита</li>
                <li><strong>Временные рамки:</strong> подготовка к 2030-2035 годам</li>
            </ul>
        `
    },
    {
        title: "DLP-системы",
        subtitle: "Предотвращение утечек данных",
        content: `
            <ul>
                <li><strong>Контент-анализ:</strong> поиск конфиденциальной информации</li>
                <li><strong>Контроль каналов:</strong> email, USB, печать, сеть</li>
                <li><strong>Политики безопасности:</strong> гибкая настройка правил</li>
                <li><strong>Мониторинг активности:</strong> отслеживание действий пользователей</li>
                <li><strong>Инцидент-менеджмент:</strong> реагирование на нарушения</li>
            </ul>
        `
    },
    {
        title: "Облачная безопасность",
        subtitle: "Защита данных в облаке",
        content: `
            <ul>
                <li><strong>Модель ответственности:</strong> разделение между провайдером и клиентом</li>
                <li><strong>Шифрование в облаке:</strong> данные в покое и в движении</li>
                <li><strong>Identity and Access Management:</strong> управление доступом</li>
                <li><strong>CASB-решения:</strong> брокеры безопасности облачных приложений</li>
                <li><strong>Мультиоблачность:</strong> безопасность в гибридных средах</li>
            </ul>
        `
    },
    {
        title: "Резервное копирование",
        subtitle: "Обеспечение непрерывности бизнеса",
        content: `
            <ul>
                <li><strong>Стратегия 3-2-1:</strong> 3 копии, 2 носителя, 1 удаленное хранение</li>
                <li><strong>Автоматизация:</strong> регулярные автоматические копии</li>
                <li><strong>Тестирование:</strong> проверка возможности восстановления</li>
                <li><strong>Шифрование backup:</strong> защита резервных копий</li>
                <li><strong>Документирование:</strong> процедуры восстановления</li>
            </ul>
        `
    }
];

// Презентация 3: Инцидент-менеджмент
const presentation3Slides = [
    {
        title: "Процесс управления инцидентами",
        subtitle: "Структурированный подход к реагированию",
        content: `
            <p>Эффективное управление инцидентами ИБ критически важно для минимизации ущерба и быстрого восстановления.</p>
            <ul>
                <li>Обнаружение и классификация инцидентов</li>
                <li>Быстрое реагирование и локализация</li>
                <li>Восстановление и извлечение уроков</li>
            </ul>
        `
    },
    {
        title: "Жизненный цикл инцидента",
        subtitle: "От обнаружения до закрытия",
        content: `
            <ul>
                <li><strong>Инициация:</strong> поступление сигнала о возможном инциденте</li>
                <li><strong>Верификация:</strong> подтверждение факта инцидента</li>
                <li><strong>Категоризация:</strong> определение типа и критичности</li>
                <li><strong>Эскалация:</strong> привлечение нужных специалистов</li>
                <li><strong>Расследование:</strong> анализ и сбор доказательств</li>
                <li><strong>Закрытие:</strong> документирование и извлечение уроков</li>
            </ul>
        `
    },
    {
        title: "Классификация инцидентов",
        subtitle: "Категории и приоритеты",
        content: `
            <ul>
                <li><strong>Критические:</strong> компрометация критических систем</li>
                <li><strong>Высокие:</strong> потенциальная угроза безопасности</li>
                <li><strong>Средние:</strong> нарушения политик безопасности</li>
                <li><strong>Низкие:</strong> подозрительная активность</li>
            </ul>
            <p><strong>Время реагирования:</strong> от 15 минут до 4 часов в зависимости от критичности</p>
        `
    },
    {
        title: "Источники обнаружения",
        subtitle: "Каналы поступления информации об инцидентах",
        content: `
            <ul>
                <li><strong>SIEM-системы:</strong> автоматическое обнаружение аномалий</li>
                <li><strong>Антивирусы и EDR:</strong> срабатывания на конечных точках</li>
                <li><strong>Сотрудники:</strong> сообщения о подозрительной активности</li>
                <li><strong>Внешние источники:</strong> уведомления от партнеров, CERT</li>
                <li><strong>Мониторинг сети:</strong> аномальный трафик</li>
                <li><strong>Аудит логов:</strong> анализ журналов событий</li>
            </ul>
        `
    },
    {
        title: "Этапы реагирования",
        subtitle: "Пошаговый алгоритм действий",
        content: `
            <ul>
                <li><strong>Подготовка:</strong> планы, процедуры, команда реагирования</li>
                <li><strong>Обнаружение:</strong> мониторинг, анализ событий</li>
                <li><strong>Анализ:</strong> определение масштаба и причин</li>
                <li><strong>Локализация:</strong> ограничение распространения</li>
                <li><strong>Устранение:</strong> удаление угрозы</li>
                <li><strong>Восстановление:</strong> возврат к нормальной работе</li>
            </ul>
        `
    },
    {
        title: "Команда реагирования",
        subtitle: "Роли и ответственность",
        content: `
            <ul>
                <li><strong>Руководитель CSIRT:</strong> координация действий</li>
                <li><strong>Аналитик ИБ:</strong> анализ инцидентов</li>
                <li><strong>Системный администратор:</strong> техническое реагирование</li>
                <li><strong>Юрист:</strong> правовые аспекты</li>
                <li><strong>PR-специалист:</strong> связи с общественностью</li>
                <li><strong>Руководство:</strong> принятие решений</li>
            </ul>
        `
    },
    {
        title: "Инструменты и технологии",
        subtitle: "Технические средства для работы с инцидентами",
        content: `
            <ul>
                <li><strong>SOAR-платформы:</strong> автоматизация реагирования</li>
                <li><strong>Threat Intelligence:</strong> данные об угрозах</li>
                <li><strong>Forensic Tools:</strong> средства цифровой криминалистики</li>
                <li><strong>Sandbox:</strong> безопасный анализ подозрительных файлов</li>
                <li><strong>Ticketing системы:</strong> учет и трекинг инцидентов</li>
                <li><strong>Коммуникационные платформы:</strong> координация команды</li>
            </ul>
        `
    },
    {
        title: "Документирование и анализ",
        subtitle: "Извлечение уроков из инцидентов",
        content: `
            <ul>
                <li><strong>Журнал инцидентов:</strong> детальная фиксация событий</li>
                <li><strong>Временная шкала:</strong> хронология развития инцидента</li>
                <li><strong>Анализ первопричин:</strong> выявление корневых причин</li>
                <li><strong>Отчет о расследовании:</strong> выводы и рекомендации</li>
                <li><strong>Обновление процедур:</strong> улучшение процессов</li>
                <li><strong>Обучение персонала:</strong> передача опыта</li>
            </ul>
        `
    },
    {
        title: "Метрики и KPI",
        subtitle: "Измерение эффективности",
        content: `
            <ul>
                <li><strong>MTTD:</strong> среднее время обнаружения (15 мин)</li>
                <li><strong>MTTR:</strong> среднее время реагирования (2 часа)</li>
                <li><strong>Количество инцидентов:</strong> тренды по месяцам</li>
                <li><strong>Ложные срабатывания:</strong> менее 5%</li>
                <li><strong>Готовность команды:</strong> 24/7 доступность</li>
                <li><strong>Обучение персонала:</strong> 40 часов в год</li>
            </ul>
        `
    }
];

// Управление презентациями
class PresentationManager {
    constructor(presentationId, slides) {
        this.presentationId = presentationId;
        this.slides = slides;
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.renderSlide();
        this.renderThumbnails();
        this.bindEvents();
    }

    renderSlide() {
        const slide = this.slides[this.currentSlide];
        const slideContent = document.getElementById(`slide${this.presentationId}-content`);
        
        slideContent.innerHTML = `
            <h1>${slide.title}</h1>
            <h2>${slide.subtitle}</h2>
            ${slide.content}
        `;

        // Обновление счетчика
        const counter = document.getElementById(`slide${this.presentationId}-counter`);
        counter.textContent = `${this.currentSlide + 1} / ${this.slides.length}`;

        // Обновление кнопок
        const prevBtn = document.getElementById(`prev-slide${this.presentationId}`);
        const nextBtn = document.getElementById(`next-slide${this.presentationId}`);
        
        prevBtn.disabled = this.currentSlide === 0;
        nextBtn.disabled = this.currentSlide === this.slides.length - 1;

        // Обновление миниатюр
        this.updateThumbnails();
    }

    renderThumbnails() {
        const thumbnailsContainer = document.getElementById(`thumbnails${this.presentationId}`);
        thumbnailsContainer.innerHTML = '';

        this.slides.forEach((slide, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.textContent = `${index + 1}. ${slide.title}`;
            thumbnail.addEventListener('click', () => this.goToSlide(index));
            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    updateThumbnails() {
        const thumbnails = document.querySelectorAll(`#thumbnails${this.presentationId} .thumbnail`);
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentSlide);
        });
    }

    bindEvents() {
        const prevBtn = document.getElementById(`prev-slide${this.presentationId}`);
        const nextBtn = document.getElementById(`next-slide${this.presentationId}`);

        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Клавиатурная навигация
        document.addEventListener('keydown', (e) => {
            if (document.getElementById(`presentation${this.presentationId}`).classList.contains('active')) {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            }
        });
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.renderSlide();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
            this.renderSlide();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.currentSlide = index;
            this.renderSlide();
        }
    }
}

// Инициализация презентаций
let presentations = {};

function initPresentations() {
    presentations[1] = new PresentationManager(1, presentation1Slides);
    presentations[2] = new PresentationManager(2, presentation2Slides);
    presentations[3] = new PresentationManager(3, presentation3Slides);
}
