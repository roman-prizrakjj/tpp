// Графики и диаграммы для дашбордов

class ChartsManager {
    constructor() {
        this.charts = {};
    }

    // График роста компьютерных инцидентов
    createIncidentsChart() {
        const chartDom = document.getElementById('incidents-chart');
        if (!chartDom) return null;
        
        // Убедимся что контейнер видим
        const tabContent = chartDom.closest('.tab-content');
        if (tabContent && !tabContent.classList.contains('active')) {
            return null;
        }
        
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Динамика компьютерных инцидентов',
                left: 'center',
                textStyle: {
                    fontSize: 24,
                    color: '#1e293b'
                }
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'click',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e2e8f0',
                textStyle: {
                    color: '#1e293b',
                    fontSize: 14
                }
            },
            legend: {
                data: ['Количество инцидентов'],
                bottom: 20,
                textStyle: {
                    fontSize: 16,
                    color: '#64748b'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: incidentsData.years,
                axisLabel: {
                    fontSize: 14,
                    color: '#64748b'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    fontSize: 14,
                    color: '#64748b'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f1f5f9'
                    }
                }
            },
            series: [{
                name: 'Количество инцидентов',
                type: 'line',
                smooth: true,
                data: incidentsData.incidents,
                lineStyle: {
                    width: 4,
                    color: '#2563eb'
                },
                itemStyle: {
                    color: '#2563eb',
                    borderWidth: 4,
                    borderColor: '#ffffff'
                },
                symbolSize: 12,
                symbol: 'circle',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(37, 99, 235, 0.3)' },
                            { offset: 1, color: 'rgba(37, 99, 235, 0.05)' }
                        ]
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(37, 99, 235, 0.8)',
                        borderWidth: 6,
                        borderColor: '#ffffff'
                    },
                    symbolSize: 16
                }
            }]
        };

        myChart.setOption(option);
        this.charts.incidents = myChart;
        
        // Создание таблицы данных
        this.createIncidentsTable();
        
        return myChart;
    }

    // Таблица данных по инцидентам
    createIncidentsTable() {
        const table = document.getElementById('incidents-table');
        console.log('Creating incidents table:', table);
        if (!table) return;
        
        let html = `
            <thead>
                <tr>
                    <th>Год</th>
                    <th>Количество инцидентов</th>
                    <th>Прирост</th>
                </tr>
            </thead>
            <tbody>
        `;

        incidentsData.years.forEach((year, index) => {
            const incidents = incidentsData.incidents[index];
            const growth = index > 0 ? 
                ((incidents - incidentsData.incidents[index - 1]) / incidentsData.incidents[index - 1] * 100).toFixed(1) + '%' : 
                '-';
            
            html += `
                <tr>
                    <td>${year}</td>
                    <td>${incidents.toLocaleString()}</td>
                    <td>${growth}</td>
                </tr>
            `;
        });

        html += '</tbody>';
        table.innerHTML = html;
        console.log('Incidents table created with HTML:', html.length, 'characters');
    }

    // График по отраслям
    createSectorsChart() {
        const chartDom = document.getElementById('sectors-chart');
        if (!chartDom) return null;
        
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Распределение инцидентов по отраслям (2025)',
                left: 'center',
                textStyle: {
                    fontSize: 24,
                    color: '#1e293b'
                }
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'click',
                formatter: '{b}: {c} ({d}%)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#2563eb',
                borderWidth: 2,
                textStyle: {
                    color: '#1e293b',
                    fontSize: 14
                }
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                textStyle: {
                    fontSize: 12,
                    color: '#64748b'
                }
            },
            series: [{
                name: 'Отрасли',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['40%', '50%'],
                data: sectorsData.sectors.map((sector, index) => ({
                    value: sectorsData.values[index],
                    name: sector
                })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    fontSize: 12,
                    color: '#64748b'
                }
            }]
        };

        myChart.setOption(option);
        this.charts.sectors = myChart;
        
        // Создание таблицы данных
        this.createSectorsTable();
        
        return myChart;
    }

    // График по мотивации
    createMotivationChart() {
        const chartDom = document.getElementById('motivation-chart');
        if (!chartDom) return null;
        
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Распределение инцидентов по мотивации (2025)',
                left: 'center',
                textStyle: {
                    fontSize: 24,
                    color: '#1e293b'
                }
            },
            tooltip: {
                trigger: 'axis',
                triggerOn: 'click',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#2563eb',
                borderWidth: 2,
                textStyle: {
                    color: '#1e293b',
                    fontSize: 14
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: motivationData.categories,
                axisLabel: {
                    fontSize: 12,
                    color: '#64748b',
                    rotate: 45
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    fontSize: 14,
                    color: '#64748b'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f1f5f9'
                    }
                }
            },
            series: [{
                name: 'Количество',
                type: 'bar',
                data: motivationData.values,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: '#3b82f6' },
                            { offset: 1, color: '#2563eb' }
                        ]
                    },
                    borderRadius: [4, 4, 0, 0]
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(37, 99, 235, 0.5)'
                    }
                }
            }]
        };

        myChart.setOption(option);
        this.charts.motivation = myChart;
        
        // Создание таблицы данных
        this.createMotivationTable();
        
        return myChart;
    }

    // График импортозамещения
    createVendorsChart() {
        const chartDom = document.getElementById('vendors-chart');
        if (!chartDom) return null;
        
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Динамика импортозамещения в сфере ИБ',
                left: 'center',
                textStyle: {
                    fontSize: 24,
                    color: '#1e293b'
                }
            },
            tooltip: {
                trigger: 'axis',
                triggerOn: 'click',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#2563eb',
                borderWidth: 2,
                textStyle: {
                    color: '#1e293b',
                    fontSize: 14
                }
            },
            legend: {
                data: ['Зарубежные решения', 'Отечественные решения'],
                bottom: 20,
                textStyle: {
                    fontSize: 16,
                    color: '#64748b'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: importSubstitutionData.categories,
                axisLabel: {
                    fontSize: 12,
                    color: '#64748b',
                    rotate: 45
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                }
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    fontSize: 14,
                    color: '#64748b',
                    formatter: '{value}%'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f1f5f9'
                    }
                }
            },
            series: [
                {
                    name: 'Зарубежные решения',
                    type: 'bar',
                    data: importSubstitutionData.foreign,
                    itemStyle: {
                        color: '#ef4444'
                    }
                },
                {
                    name: 'Отечественные решения',
                    type: 'bar',
                    data: importSubstitutionData.domestic,
                    itemStyle: {
                        color: '#22c55e'
                    }
                }
            ]
        };

        myChart.setOption(option);
        this.charts.vendors = myChart;
        
        // Создание таблицы данных
        this.createVendorsTable();
        
        return myChart;
    }

    // График покрытия MITRE ATT&CK
    createAISecurityChart() {
        const chartDom = document.getElementById('ai-security-chart');
        if (!chartDom) return null;
        
        const myChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Покрытие тактик MITRE ATT&CK средствами защиты',
                left: 'center',
                textStyle: {
                    fontSize: 24,
                    color: '#1e293b'
                }
            },
            tooltip: {
                trigger: 'axis',
                triggerOn: 'click',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#2563eb',
                borderWidth: 2,
                textStyle: {
                    color: '#1e293b',
                    fontSize: 14
                },
                formatter: '{b}: {c}%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '20%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: mitreData.tactics,
                axisLabel: {
                    fontSize: 11,
                    color: '#64748b',
                    rotate: 45
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                }
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    fontSize: 14,
                    color: '#64748b',
                    formatter: '{value}%'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2e8f0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f1f5f9'
                    }
                }
            },
            series: [{
                name: 'Покрытие',
                type: 'bar',
                data: mitreData.coverage.map(value => ({
                    value: value,
                    itemStyle: {
                        color: value >= 80 ? '#22c55e' : value >= 60 ? '#f59e0b' : '#ef4444'
                    }
                })),
                itemStyle: {
                    borderRadius: [4, 4, 0, 0]
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            }]
        };

        myChart.setOption(option);
        this.charts.aiSecurity = myChart;
        
        // Создание таблицы данных
        this.createAISecurityTable();
        
        return myChart;
    }

    // Таблица данных по отраслям
    createSectorsTable() {
        const table = document.getElementById('sectors-table');
        if (!table) return;
        
        let html = `
            <thead>
                <tr>
                    <th>Отрасль</th>
                    <th>Количество инцидентов</th>
                    <th>Доля (%)</th>
                </tr>
            </thead>
            <tbody>
        `;

        const total = sectorsData.values.reduce((sum, val) => sum + val, 0);
        sectorsData.sectors.forEach((sector, index) => {
            const value = sectorsData.values[index];
            const percentage = ((value / total) * 100).toFixed(1);
            
            html += `
                <tr>
                    <td>${sector}</td>
                    <td class="number">${value}</td>
                    <td>${percentage}%</td>
                </tr>
            `;
        });

        html += '</tbody>';
        table.innerHTML = html;
    }

    // Таблица данных по мотивации
    createMotivationTable() {
        const table = document.getElementById('motivation-table');
        if (!table) return;
        
        let html = `
            <thead>
                <tr>
                    <th>Мотивация</th>
                    <th>Количество инцидентов</th>
                    <th>Доля (%)</th>
                </tr>
            </thead>
            <tbody>
        `;

        const total = motivationData.values.reduce((sum, val) => sum + val, 0);
        motivationData.categories.forEach((category, index) => {
            const value = motivationData.values[index];
            const percentage = ((value / total) * 100).toFixed(1);
            
            html += `
                <tr>
                    <td>${category}</td>
                    <td class="number">${value}</td>
                    <td>${percentage}%</td>
                </tr>
            `;
        });

        html += '</tbody>';
        table.innerHTML = html;
    }

    // Таблица данных по импортозамещению
    createVendorsTable() {
        const table = document.getElementById('vendors-table');
        if (!table) return;
        
        let html = `
            <thead>
                <tr>
                    <th>Период</th>
                    <th>Российские решения</th>
                    <th>Зарубежные решения</th>
                </tr>
            </thead>
            <tbody>
        `;

        importSubstitutionData.categories.forEach((category, index) => {
            const domestic = importSubstitutionData.domestic[index];
            const foreign = importSubstitutionData.foreign[index];
            
            html += `
                <tr>
                    <td>${category}</td>
                    <td class="number growth">${domestic}%</td>
                    <td class="number decline">${foreign}%</td>
                </tr>
            `;
        });

        html += '</tbody>';
        table.innerHTML = html;
    }

    // Таблица данных по MITRE ATT&CK
    createAISecurityTable() {
        const table = document.getElementById('ai-security-table');
        if (!table) return;
        
        let html = `
            <thead>
                <tr>
                    <th>Тактика MITRE ATT&CK</th>
                    <th>Покрытие (%)</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
        `;

        mitreAttackData.tactics.forEach((tactic, index) => {
            const coverage = mitreAttackData.coverage[index];
            const status = coverage >= 80 ? 'Высокое' : coverage >= 60 ? 'Среднее' : 'Низкое';
            const statusClass = coverage >= 80 ? 'growth' : coverage >= 60 ? 'number' : 'decline';
            
            html += `
                <tr>
                    <td>${tactic}</td>
                    <td class="number">${coverage}%</td>
                    <td class="${statusClass}">${status}</td>
                </tr>
            `;
        });

        html += '</tbody>';
        table.innerHTML = html;
    }

    // Обновление размеров графиков при изменении размера окна
    resizeCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart && chart.resize) {
                chart.resize();
            }
        });
    }
}

// Инициализация менеджера графиков
const chartsManager = new ChartsManager();

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    chartsManager.resizeCharts();
});
