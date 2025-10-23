@echo off
echo ========================================
echo   Кибербезопасность - Тач-приложение
echo ========================================
echo.
echo Запуск локального веб-сервера...
echo.

REM Проверка наличия Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Найден Python, запуск сервера на порту 8000...
    echo.
    echo Откройте в браузере: http://localhost:8000
    echo.
    echo Для остановки нажмите Ctrl+C
    echo.
    python -m http.server 8000
) else (
    REM Проверка наличия Node.js
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Найден Node.js, установка и запуск live-server...
        echo.
        npm install -g live-server
        echo.
        echo Откройте в браузере: http://localhost:8080
        echo.
        live-server --port=8080
    ) else (
        echo.
        echo ОШИБКА: Не найден Python или Node.js
        echo.
        echo Установите один из них:
        echo - Python: https://www.python.org/downloads/
        echo - Node.js: https://nodejs.org/
        echo.
        echo Или откройте index.html напрямую в браузере
        echo (некоторые функции могут не работать без сервера)
        echo.
        pause
    )
)
