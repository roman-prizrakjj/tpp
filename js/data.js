// Данные для дашбордов кибербезопасности

// Данные по компьютерным инцидентам
const incidentsData = {
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    incidents: [1264, 1508, 2271, 2418, 2921, 3286, 3813, 4324]
};

// Данные по отраслям (2025 год)
const sectorsData = {
    sectors: [
        'Госучреждения',
        'Промышленность', 
        'Здравоохранение',
        'Финансовые организации',
        'Наука и образование',
        'IT-компании',
        'Другие',
        'Без привязки к отрасли',
        'Торговля',
        'Сфера услуг',
        'Транспорт',
        'Оборонные предприятия'
    ],
    values: [21, 13, 6, 5, 5, 6, 11, 21, 4, 4, 3, 1]
};

// Данные по мотивации (2025 год)
const motivationData = {
    categories: [
        'Получение данных',
        'Финансовая выгода', 
        'Хактивизм',
        'Кибервойна',
        'Использование ресурсов',
        'Неизвестно'
    ],
    values: [63, 49, 5, 7, 9, 1]
};

// Данные по типам вредоносного ПО (2025 год)
const malwareData = {
    types: [
        'Шифровальщик',
        'ВПО для удаленного управления',
        'Шпионское ПО', 
        'Банковский троян',
        'Загрузчик',
        'Майнер',
        'Другие'
    ],
    values: [49, 33, 22, 0, 14, 0, 13]
};

// Данные для канбан-доски
const kanbanData = {
    columns: [
        {
            id: 'backlog',
            title: 'Новые инциденты',
            cards: [
                {
                    id: 'inc-001',
                    title: 'Подозрительная активность в сети',
                    description: 'Обнаружен необычный трафик с внешних IP-адресов',
                    priority: 'high',
                    tags: ['сеть', 'мониторинг']
                },
                {
                    id: 'inc-002', 
                    title: 'Попытка несанкционированного доступа',
                    description: 'Множественные неудачные попытки входа в систему',
                    priority: 'high',
                    tags: ['доступ', 'аутентификация']
                },
                {
                    id: 'inc-003',
                    title: 'Подозрительное ПО на рабочей станции',
                    description: 'Антивирус обнаружил потенциально опасный файл',
                    priority: 'medium',
                    tags: ['малвар', 'endpoint']
                },
                {
                    id: 'inc-011',
                    title: 'Подозрительная DNS-активность',
                    description: 'Обнаружены запросы к подозрительным доменам',
                    priority: 'high',
                    tags: ['dns', 'сеть']
                },
                {
                    id: 'inc-012',
                    title: 'Аномальный исходящий трафик',
                    description: 'Превышение нормального объема исходящих данных',
                    priority: 'medium',
                    tags: ['трафик', 'dlp']
                },
                {
                    id: 'inc-013',
                    title: 'Подозрительная активность в AD',
                    description: 'Необычные изменения в Active Directory',
                    priority: 'high',
                    tags: ['ad', 'привилегии']
                },
                {
                    id: 'inc-014',
                    title: 'Попытка SQL-инъекции',
                    description: 'Обнаружены попытки SQL-инъекций в веб-приложении',
                    priority: 'high',
                    tags: ['sql', 'веб-безопасность']
                },
                {
                    id: 'inc-015',
                    title: 'Подозрительные процессы',
                    description: 'Запущены неизвестные процессы на сервере',
                    priority: 'medium',
                    tags: ['процессы', 'сервер']
                },
                {
                    id: 'inc-016',
                    title: 'Нарушение политики паролей',
                    description: 'Обнаружены слабые пароли пользователей',
                    priority: 'low',
                    tags: ['пароли', 'политика']
                },
                {
                    id: 'inc-017',
                    title: 'Подозрительные файлы в карантине',
                    description: 'Антивирус поместил несколько файлов в карантин',
                    priority: 'medium',
                    tags: ['антивирус', 'карантин']
                },
                {
                    id: 'inc-018',
                    title: 'Аномальная активность VPN',
                    description: 'Подключения VPN в необычное время',
                    priority: 'medium',
                    tags: ['vpn', 'доступ']
                },
                {
                    id: 'inc-019',
                    title: 'Подозрительные скрипты PowerShell',
                    description: 'Выполнение подозрительных PowerShell скриптов',
                    priority: 'high',
                    tags: ['powershell', 'скрипты']
                },
                {
                    id: 'inc-020',
                    title: 'Нарушение целостности системных файлов',
                    description: 'Изменены критически важные системные файлы',
                    priority: 'high',
                    tags: ['целостность', 'система']
                }
            ]
        },
        {
            id: 'analysis',
            title: 'В анализе',
            cards: [
                {
                    id: 'inc-004',
                    title: 'Анализ фишингового письма',
                    description: 'Исследование подозрительного email с вложением',
                    priority: 'medium',
                    tags: ['фишинг', 'email']
                },
                {
                    id: 'inc-005',
                    title: 'Проверка целостности данных',
                    description: 'Обнаружены расхождения в контрольных суммах файлов',
                    priority: 'high',
                    tags: ['целостность', 'данные']
                },
                {
                    id: 'inc-021',
                    title: 'Анализ подозрительного домена',
                    description: 'Исследование репутации и активности домена',
                    priority: 'medium',
                    tags: ['домен', 'репутация']
                },
                {
                    id: 'inc-022',
                    title: 'Форензика жесткого диска',
                    description: 'Анализ артефактов на скомпрометированной системе',
                    priority: 'high',
                    tags: ['форензика', 'диск']
                },
                {
                    id: 'inc-023',
                    title: 'Анализ сетевого трафика',
                    description: 'Детальный анализ подозрительных сетевых соединений',
                    priority: 'medium',
                    tags: ['трафик', 'анализ']
                },
                {
                    id: 'inc-024',
                    title: 'Исследование вредоносного ПО',
                    description: 'Реверс-инжиниринг подозрительного исполняемого файла',
                    priority: 'high',
                    tags: ['малвар', 'реверс']
                },
                {
                    id: 'inc-025',
                    title: 'Анализ логов веб-сервера',
                    description: 'Поиск следов атаки в логах Apache',
                    priority: 'medium',
                    tags: ['логи', 'веб-сервер']
                },
                {
                    id: 'inc-026',
                    title: 'Проверка компрометации учетных записей',
                    description: 'Анализ активности подозрительных аккаунтов',
                    priority: 'high',
                    tags: ['аккаунты', 'компрометация']
                },
                {
                    id: 'inc-027',
                    title: 'Анализ подозрительных процессов',
                    description: 'Исследование поведения неизвестных процессов',
                    priority: 'medium',
                    tags: ['процессы', 'поведение']
                },
                {
                    id: 'inc-028',
                    title: 'Проверка целостности базы данных',
                    description: 'Анализ возможных изменений в критичных данных',
                    priority: 'high',
                    tags: ['база данных', 'целостность']
                },
                {
                    id: 'inc-029',
                    title: 'Анализ подозрительных сертификатов',
                    description: 'Проверка валидности SSL-сертификатов',
                    priority: 'low',
                    tags: ['сертификаты', 'ssl']
                },
                {
                    id: 'inc-030',
                    title: 'Исследование социальной инженерии',
                    description: 'Анализ попыток обмана сотрудников',
                    priority: 'medium',
                    tags: ['социальная инженерия', 'обучение']
                }
            ]
        },
        {
            id: 'response',
            title: 'Реагирование',
            cards: [
                {
                    id: 'inc-006',
                    title: 'Блокировка скомпрометированного аккаунта',
                    description: 'Временная блокировка учетной записи до выяснения обстоятельств',
                    priority: 'high',
                    tags: ['блокировка', 'аккаунт']
                },
                {
                    id: 'inc-007',
                    title: 'Изоляция зараженной системы',
                    description: 'Отключение рабочей станции от сети для предотвращения распространения',
                    priority: 'medium',
                    tags: ['изоляция', 'сеть']
                },
                {
                    id: 'inc-031',
                    title: 'Блокировка вредоносных IP-адресов',
                    description: 'Добавление подозрительных IP в черный список файрвола',
                    priority: 'high',
                    tags: ['firewall', 'блокировка']
                },
                {
                    id: 'inc-032',
                    title: 'Отключение скомпрометированного сервиса',
                    description: 'Временное отключение уязвимого веб-сервиса',
                    priority: 'high',
                    tags: ['сервис', 'отключение']
                },
                {
                    id: 'inc-033',
                    title: 'Смена паролей администраторов',
                    description: 'Принудительная смена паролей привилегированных аккаунтов',
                    priority: 'high',
                    tags: ['пароли', 'администраторы']
                },
                {
                    id: 'inc-034',
                    title: 'Удаление вредоносных файлов',
                    description: 'Очистка системы от обнаруженного вредоносного ПО',
                    priority: 'medium',
                    tags: ['очистка', 'малвар']
                },
                {
                    id: 'inc-035',
                    title: 'Обновление антивирусных сигнатур',
                    description: 'Экстренное обновление баз антивирусного ПО',
                    priority: 'medium',
                    tags: ['антивирус', 'обновление']
                },
                {
                    id: 'inc-036',
                    title: 'Блокировка подозрительных доменов',
                    description: 'Добавление вредоносных доменов в DNS-фильтр',
                    priority: 'medium',
                    tags: ['dns', 'блокировка']
                },
                {
                    id: 'inc-037',
                    title: 'Отзыв скомпрометированных сертификатов',
                    description: 'Аннулирование подозрительных SSL-сертификатов',
                    priority: 'high',
                    tags: ['сертификаты', 'отзыв']
                },
                {
                    id: 'inc-038',
                    title: 'Изоляция сетевого сегмента',
                    description: 'Временная изоляция скомпрометированного сегмента сети',
                    priority: 'high',
                    tags: ['сеть', 'сегментация']
                },
                {
                    id: 'inc-039',
                    title: 'Активация резервных систем',
                    description: 'Переключение на резервные системы и сервисы',
                    priority: 'medium',
                    tags: ['резерв', 'переключение']
                },
                {
                    id: 'inc-040',
                    title: 'Уведомление пользователей',
                    description: 'Информирование сотрудников о текущей угрозе',
                    priority: 'low',
                    tags: ['уведомления', 'пользователи']
                }
            ]
        },
        {
            id: 'recovery',
            title: 'Восстановление',
            cards: [
                {
                    id: 'inc-008',
                    title: 'Восстановление из резервной копии',
                    description: 'Восстановление поврежденных файлов из backup',
                    priority: 'medium',
                    tags: ['восстановление', 'backup']
                },
                {
                    id: 'inc-041',
                    title: 'Восстановление базы данных',
                    description: 'Восстановление целостности базы данных из резервной копии',
                    priority: 'high',
                    tags: ['база данных', 'восстановление']
                },
                {
                    id: 'inc-042',
                    title: 'Переустановка операционной системы',
                    description: 'Полная переустановка ОС на скомпрометированном сервере',
                    priority: 'high',
                    tags: ['ос', 'переустановка']
                },
                {
                    id: 'inc-043',
                    title: 'Восстановление сетевых настроек',
                    description: 'Восстановление корректной конфигурации сети',
                    priority: 'medium',
                    tags: ['сеть', 'конфигурация']
                },
                {
                    id: 'inc-044',
                    title: 'Восстановление учетных записей',
                    description: 'Восстановление заблокированных пользовательских аккаунтов',
                    priority: 'medium',
                    tags: ['аккаунты', 'восстановление']
                },
                {
                    id: 'inc-045',
                    title: 'Восстановление веб-сервисов',
                    description: 'Возобновление работы отключенных веб-сервисов',
                    priority: 'medium',
                    tags: ['веб-сервисы', 'запуск']
                },
                {
                    id: 'inc-046',
                    title: 'Восстановление сертификатов',
                    description: 'Выпуск новых SSL-сертификатов взамен отозванных',
                    priority: 'medium',
                    tags: ['сертификаты', 'выпуск']
                },
                {
                    id: 'inc-047',
                    title: 'Тестирование восстановленных систем',
                    description: 'Проверка работоспособности восстановленных компонентов',
                    priority: 'high',
                    tags: ['тестирование', 'проверка']
                },
                {
                    id: 'inc-048',
                    title: 'Восстановление мониторинга',
                    description: 'Возобновление работы систем мониторинга безопасности',
                    priority: 'medium',
                    tags: ['мониторинг', 'восстановление']
                },
                {
                    id: 'inc-049',
                    title: 'Обновление документации',
                    description: 'Актуализация документации после инцидента',
                    priority: 'low',
                    tags: ['документация', 'обновление']
                }
            ]
        },
        {
            id: 'closed',
            title: 'Закрытые',
            cards: [
                {
                    id: 'inc-009',
                    title: 'Ложное срабатывание DLP',
                    description: 'Проверка показала, что передача данных была легитимной',
                    priority: 'low',
                    tags: ['dlp', 'ложное срабатывание']
                },
                {
                    id: 'inc-010',
                    title: 'Обновление антивирусных баз',
                    description: 'Плановое обновление сигнатур завершено успешно',
                    priority: 'low',
                    tags: ['антивирус', 'обновление']
                },
                {
                    id: 'inc-050',
                    title: 'Устранена уязвимость в веб-приложении',
                    description: 'Успешно закрыта SQL-инъекция после обновления кода',
                    priority: 'medium',
                    tags: ['уязвимость', 'исправлено']
                },
                {
                    id: 'inc-051',
                    title: 'Завершено расследование фишинга',
                    description: 'Фишинговое письмо заблокировано, пользователи уведомлены',
                    priority: 'medium',
                    tags: ['фишинг', 'завершено']
                },
                {
                    id: 'inc-052',
                    title: 'Восстановлен доступ к системе',
                    description: 'Пользователь восстановил доступ после сброса пароля',
                    priority: 'low',
                    tags: ['доступ', 'восстановлено']
                },
                {
                    id: 'inc-053',
                    title: 'Ложная тревога системы мониторинга',
                    description: 'Сработка SIEM оказалась ложной из-за настроек',
                    priority: 'low',
                    tags: ['siem', 'ложная тревога']
                },
                {
                    id: 'inc-054',
                    title: 'Обновлены правила файрвола',
                    description: 'Успешно внедрены новые правила безопасности',
                    priority: 'low',
                    tags: ['firewall', 'обновление']
                },
                {
                    id: 'inc-055',
                    title: 'Завершено обучение сотрудников',
                    description: 'Проведен тренинг по кибербезопасности для отдела',
                    priority: 'low',
                    tags: ['обучение', 'завершено']
                },
                {
                    id: 'inc-056',
                    title: 'Исправлена конфигурация DNS',
                    description: 'Устранены проблемы с разрешением доменных имен',
                    priority: 'low',
                    tags: ['dns', 'исправлено']
                },
                {
                    id: 'inc-057',
                    title: 'Плановое тестирование DR',
                    description: 'Успешно проведено тестирование плана аварийного восстановления',
                    priority: 'low',
                    tags: ['dr', 'тестирование']
                },
                {
                    id: 'inc-058',
                    title: 'Обновлены сертификаты безопасности',
                    description: 'Плановое обновление SSL-сертификатов завершено',
                    priority: 'low',
                    tags: ['сертификаты', 'обновлено']
                },
                {
                    id: 'inc-059',
                    title: 'Аудит безопасности завершен',
                    description: 'Внешний аудит выявил минимальные замечания',
                    priority: 'low',
                    tags: ['аудит', 'завершен']
                },
                {
                    id: 'inc-060',
                    title: 'Резервное копирование настроено',
                    description: 'Настроена автоматическая система резервного копирования',
                    priority: 'low',
                    tags: ['backup', 'настроено']
                }
            ]
        }
    ]
};

// Данные для матрицы MITRE ATT&CK (упрощенная версия)
const mitreData = {
    tactics: [
        'Разведка',
        'Первоначальный доступ', 
        'Выполнение',
        'Закрепление',
        'Повышение привилегий',
        'Предотвращение обнаружения',
        'Получение учетных данных',
        'Обнаружение',
        'Перемещение внутри периметра',
        'Сбор данных',
        'Эксфильтрация данных',
        'Деструктивное воздействие'
    ],
    coverage: [75, 85, 90, 80, 85, 70, 88, 92, 78, 85, 75, 65]
};

// Данные по импортозамещению
const importSubstitutionData = {
    categories: [
        '2022 год',
        '2023 год',
        '2028 год (прогноз)'
    ],
    foreign: [30, 11, 4.2],
    domestic: [70, 89, 95.8]
};

// API для динамического обновления данных
class DataManager {
    // Обновить данные инцидентов
    static updateIncidents(years, incidents) {
        if (years) incidentsData.years = years;
        if (incidents) incidentsData.incidents = incidents;
        
        // Автоматически обновить график если chartsManager доступен
        if (window.chartsManager) {
            chartsManager.updateIncidentsData({ years, incidents });
        }
        
        console.log('Данные инцидентов обновлены:', { years, incidents });
    }

    // Обновить данные секторов  
    static updateSectors(sectors, values) {
        if (sectors) sectorsData.sectors = sectors;
        if (values) sectorsData.values = values;
        
        // Автоматически обновить график если chartsManager доступен
        if (window.chartsManager) {
            chartsManager.updateSectorsData({ sectors, values });
        }
        
        console.log('Данные секторов обновлены:', { sectors, values });
    }

    // Обновить данные мотиваций
    static updateMotivations(motivations, values) {
        if (motivations) motivationData.motivations = motivations;
        if (values) motivationData.values = values;
        
        // Автоматически обновить график если chartsManager доступен
        if (window.chartsManager) {
            chartsManager.updateMotivationData({ motivations, values });
        }
        
        console.log('Данные мотиваций обновлены:', { motivations, values });
    }

    // Добавить новый инцидент
    static addIncident(year, count) {
        incidentsData.years.push(year);
        incidentsData.incidents.push(count);
        
        // Автоматически обновить график
        if (window.chartsManager) {
            chartsManager.createIncidentsChart();
        }
        
        console.log(`Добавлен инцидент: ${year} - ${count}`);
    }

    // Получить текущие данные
    static getData(type) {
        switch(type) {
            case 'incidents':
                return incidentsData;
            case 'sectors':
                return sectorsData;
            case 'motivation':
                return motivationData;
            case 'mitre':
                return mitreData;
            case 'kanban':
                return kanbanData;
            case 'import':
                return importSubstitutionData;
            default:
                return null;
        }
    }

    // Сохранить данные в localStorage
    static saveToStorage() {
        const allData = {
            incidents: incidentsData,
            sectors: sectorsData,
            motivation: motivationData,
            mitre: mitreData,
            kanban: kanbanData,
            importSubstitution: importSubstitutionData
        };
        
        localStorage.setItem('cyberSecurityData', JSON.stringify(allData));
        console.log('Данные сохранены в localStorage');
    }

    // Загрузить данные из localStorage
    static loadFromStorage() {
        const stored = localStorage.getItem('cyberSecurityData');
        if (stored) {
            const allData = JSON.parse(stored);
            
            // Обновить все данные
            if (allData.incidents) Object.assign(incidentsData, allData.incidents);
            if (allData.sectors) Object.assign(sectorsData, allData.sectors);
            if (allData.motivation) Object.assign(motivationData, allData.motivation);
            if (allData.mitre) Object.assign(mitreData, allData.mitre);
            if (allData.kanban) Object.assign(kanbanData, allData.kanban);
            if (allData.importSubstitution) Object.assign(importSubstitutionData, allData.importSubstitution);
            
            // Обновить все графики
            if (window.chartsManager) {
                chartsManager.refreshAllCharts();
            }
            
            console.log('Данные загружены из localStorage');
            return true;
        }
        return false;
    }
}

// Экспорт для глобального доступа
window.DataManager = DataManager;
