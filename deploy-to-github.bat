@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   🚀 婴儿英语启蒙工具 - GitHub 推送脚本
echo ========================================
echo.
echo 请按照以下步骤操作：
echo.
echo 1️⃣ 首先，在 GitHub 上创建新仓库：
echo    - 访问 https://github.com/new
echo    - Repository name: baby-english
echo    - 选择 Public 或 Private
echo    - 不要勾选 "Add README"
echo    - 点击 "Create repository"
echo.
echo 2️⃣ 然后，复制你的仓库地址（类似）：
echo    https://github.com/YOUR_USERNAME/baby-english.git
echo.
set /p REPO_URL="3️⃣ 粘贴你的仓库地址："
echo.
if "%REPO_URL%"=="" (
    echo ❌ 错误：仓库地址不能为空！
    pause
    exit /b
)
echo.
echo ✅ 开始推送代码...
echo.

git init
git add .
git commit -m "Initial commit - baby english learning tool for Vercel deployment"
git branch -M main

echo.
echo 正在关联远程仓库...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo 正在推送到 GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ 推送成功！
    echo ========================================
    echo.
    echo 下一步：
    echo 1. 访问 https://vercel.com
    echo 2. 使用 GitHub 账号登录
    echo 3. 点击 "Add New Project"
    echo 4. 导入 baby-english 仓库
    echo 5. 点击 Deploy
    echo.
    echo 详细步骤请查看 DEPLOY.md 文件
    echo.
) else (
    echo.
    echo ========================================
    echo   ❌ 推送失败！请检查：
    echo   - GitHub 用户名是否正确
    echo   - 仓库是否存在
    echo   - 是否有访问权限
    echo ========================================
    echo.
)

pause
