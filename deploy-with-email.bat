@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   🚀 Vercel CLI 邮箱验证码部署
echo ========================================
echo.
echo 请提供你的邮箱地址用于接收验证码
echo.
set /p EMAIL="请输入邮箱地址："
echo.
if "%EMAIL%"=="" (
    echo ❌ 错误：邮箱不能为空！
    pause
    exit /b
)
echo.
echo ✅ 正在发送验证码到：%EMAIL%
echo.
echo 请稍候，验证码将发送到你的邮箱...
echo.

REM 设置 Vercel 邮箱
set VERCEL_EMAIL=%EMAIL%

REM 开始部署
vercel --prod

echo.
echo ========================================
echo   检查邮箱验证码
echo ========================================
echo.
echo 请查看邮箱收件箱（包括垃圾邮件箱）
echo 找到 Vercel 发送的验证码邮件
echo.
echo 验证码格式类似：123456
echo.

pause
