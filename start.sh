#!/bin/bash

echo "========================================"
echo "  Кибербезопасность - Тач-приложение"
echo "========================================"
echo ""
echo "Запуск локального веб-сервера..."
echo ""

# Проверка наличия Python
if command -v python3 &> /dev/null; then
    echo "Найден Python 3, запуск сервера на порту 8000..."
    echo ""
    echo "Откройте в браузере: http://localhost:8000"
    echo ""
    echo "Для остановки нажмите Ctrl+C"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Найден Python, запуск сервера на порту 8000..."
    echo ""
    echo "Откройте в браузере: http://localhost:8000"
    echo ""
    echo "Для остановки нажмите Ctrl+C"
    echo ""
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "Найден Node.js, установка и запуск live-server..."
    echo ""
    
    # Проверка наличия live-server
    if ! command -v live-server &> /dev/null; then
        echo "Установка live-server..."
        npm install -g live-server
    fi
    
    echo "Откройте в браузере: http://localhost:8080"
    echo ""
    live-server --port=8080
else
    echo ""
    echo "ОШИБКА: Не найден Python или Node.js"
    echo ""
    echo "Установите один из них:"
    echo "- Python: https://www.python.org/downloads/"
    echo "- Node.js: https://nodejs.org/"
    echo ""
    echo "Или откройте index.html напрямую в браузере"
    echo "(некоторые функции могут не работать без сервера)"
    echo ""
    read -p "Нажмите Enter для выхода..."
fi
