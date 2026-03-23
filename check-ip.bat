@echo off
chcp 65001 >nul
echo.
echo ====================================
echo   手机访问地址查询
echo ====================================
echo.

echo 正在获取本机 IP 地址...
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        echo ✅ 本机 IP: %%b
        echo.
        echo 📱 手机访问地址:
        echo    http://%%b:3000
        echo.
        goto :found
    )
)

:found
echo 💡 使用说明:
echo 1. 确保手机和电脑连接同一 WiFi
echo 2. 在手机浏览器输入上面的地址
echo 3. 如果无法访问，请检查防火墙设置
echo.
echo ====================================
pause
