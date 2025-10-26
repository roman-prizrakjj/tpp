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
                show: false
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
                left: '8%',
                right: '8%',
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
                },
                markPoint: {
                    silent: false,
                    z: 1000,
                    zlevel: 10,
                    data: [
                        {
                            coord: [0, 1950],
                            symbol: 'roundRect',
                            symbolSize: [110, 70],
                            symbolOffset: [75, 0],
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [
                                        { offset: 0, color: '#f8fafc' },
                                        { offset: 1, color: '#e2e8f0' }
                                    ]
                                },
                                borderColor: '#64748b',
                                borderWidth: 2,
                                shadowBlur: 12,
                                shadowColor: 'rgba(0, 0, 0, 0.15)',
                                shadowOffsetY: 4,
                                borderRadius: 6
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2018\n1,264',
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#1e293b',
                                lineHeight: 16
                            }
                        },
                        {
                            coord: [1, 1508],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2019\n1,508\n+19.3%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [2, 2271],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2020\n2,271\n+50.6%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [3, 2418],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2021\n2,418\n+6.5%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [4, 2921],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2022\n2,921\n+20.8%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [5, 3286],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2023\n3,286\n+12.5%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [6, 3813],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2024\n3,813\n+16.0%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        },
                        {
                            coord: [7, 4324],
                            symbol: 'roundRect',
                            symbolSize: [80, 40],
                            symbolOffset: [0, 50],
                            itemStyle: {
                                color: '#ffffff',
                                borderColor: '#2563eb',
                                borderWidth: 3,
                                shadowBlur: 10,
                                shadowColor: 'rgba(37, 99, 235, 0.5)',
                                shadowOffsetY: 3
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '2025\n4,324\n+13.4%',
                                fontSize: 11,
                                fontWeight: 'bold',
                                color: '#1e293b'
                            }
                        }
                    ]
                },
                markLine: {
                    silent: true,
                    z: 500,
                    zlevel: 5,
                    symbol: ['none', 'arrow'],
                    symbolSize: [0, 10],
                    lineStyle: {
                        color: '#64748b',
                        width: 2,
                        type: 'solid',
                        opacity: 0.8
                    },
                    data: [
                        [{ coord: [0, 1264] }, { coord: [0.85, 1850] }],
                        [{ coord: [1, 1508] }, { coord: [1, 1570] }],
                        [{ coord: [2, 2271] }, { coord: [2, 2330] }],
                        [{ coord: [3, 2418] }, { coord: [3, 2480] }],
                        [{ coord: [4, 2921] }, { coord: [4, 2980] }],
                        [{ coord: [5, 3286] }, { coord: [5, 3350] }],
                        [{ coord: [6, 3813] }, { coord: [6, 3870] }],
                        [{ coord: [7, 4324] }, { coord: [7, 4380] }]
                    ]
                }
            }]
        };

        myChart.setOption(option);
        this.charts.incidents = myChart;
        
        return myChart;
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
                formatter: '{b}',
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
                data: sectorsData.sectors.map((sector, index) => {
                    const total = sectorsData.values.reduce((sum, val) => sum + val, 0);
                    const percentage = ((sectorsData.values[index] / total) * 100).toFixed(1);
                    return {
                        value: sectorsData.values[index],
                        name: `${sector} (${percentage}%)`
                    };
                }),
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
                },
                labelLine: {
                    length: 15,
                    length2: 25
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

    // Динамическое обновление данных и пересоздание графиков
    updateIncidentsData(newData) {
        if (newData.years) incidentsData.years = newData.years;
        if (newData.incidents) incidentsData.incidents = newData.incidents;
        
        // Пересоздать график с новыми данными
        const chart = this.createIncidentsChart();
        if (chart) {
            console.log('График инцидентов обновлен с новыми данными');
        }
        return chart;
    }

    updateSectorsData(newData) {
        if (newData.sectors) sectorsData.sectors = newData.sectors;
        if (newData.values) sectorsData.values = newData.values;
        
        // Пересоздать график с новыми данными
        const chart = this.createSectorsChart();
        if (chart) {
            console.log('График секторов обновлен с новыми данными');
        }
        return chart;
    }

    updateMotivationData(newData) {
        if (newData.motivations) motivationData.motivations = newData.motivations;
        if (newData.values) motivationData.values = newData.values;
        
        // Пересоздать график с новыми данными
        const chart = this.createMotivationChart();
        if (chart) {
            console.log('График мотиваций обновлен с новыми данными');
        }
        return chart;
    }

    // Универсальный метод обновления всех графиков
    refreshAllCharts() {
        // Пересоздать все активные графики
        const activeTab = document.querySelector('.dashboard-tab.active');
        if (activeTab) {
            const tabId = activeTab.dataset.tab;
            
            switch(tabId) {
                case 'incidents':
                    this.createIncidentsChart();
                    break;
                case 'sectors':
                    this.createSectorsChart();
                    break;
                case 'motivation':
                    this.createMotivationChart();
                    break;
                case 'vendors':
                    this.createVendorsChart();
                    break;
                case 'ai-security':
                    this.createAISecurityChart();
                    break;
            }
        }
        
        console.log('Все активные графики обновлены');
    }
}

// Инициализация менеджера графиков
const chartsManager = new ChartsManager();

// Сделать chartsManager глобально доступным
window.chartsManager = chartsManager;

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    chartsManager.resizeCharts();
});
