@echo off
chcp 65001 >nul
echo.
echo ====================================
echo   配置手机访问（自动修复）
echo ====================================
echo.

echo [1/3] 获取本机 IP 地址...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        set IP=%%b
        goto :got_ip
    )
)

:got_ip
echo ✅ 本机 IP: %IP%
echo.

echo [2/3] 添加防火墙规则...
netsh advfirewall firewall add rule name="Node.js Port 3000" dir=in action=allow protocol=TCP localport=3000 >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ 防火墙规则已添加
) else (
    echo ⚠️  需要管理员权限，请右键以管理员身份运行此脚本
)
echo.

echo [3/3] 测试网络连接...
echo.
echo 📱 手机访问地址:
echo    http://%IP%:3000
echo.
echo 💡 如果仍然无法访问:
echo 1. 检查手机和电脑是否在同一 WiFi
echo 2. 临时关闭防火墙测试
echo 3. 确认 npm start 正在运行
echo.
echo ====================================
echo.
echo 正在打开测试页面...
start http://%IP%:3000
echo.
pause
