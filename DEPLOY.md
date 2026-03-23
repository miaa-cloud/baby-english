# 🚀 部署到 Vercel 完整指南

## 📋 部署步骤

### 第一步：安装 Git（如果还没有）

1. 下载地址：https://git-scm.com/download/win
2. 一路默认安装即可

### 第二步：注册 GitHub 账号

1. 访问：https://github.com
2. 点击 "Sign up" 注册账号
3. 验证邮箱

### 第三步：将代码推送到 GitHub

在**项目目录**（`baby-english` 文件夹）中执行以下命令：

#### 方法 A：使用 Git Bash（推荐）

右键点击 `baby-english` 文件夹，选择 "Git Bash Here"，然后依次执行：

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交代码
git commit -m "Initial commit - baby english learning tool"

# 4. 创建一个新的 GitHub 仓库（手动操作）
# 访问 https://github.com/new
#  Repository name: baby-english
#  选择 Private 或 Public
#  点击 Create repository

# 5. 关联远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/baby-english.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 方法 B：使用 GitHub Desktop（图形化界面）

1. 下载：https://desktop.github.com
2. 安装后登录 GitHub
3. File → Add Local Repository → 选择 `baby-english` 文件夹
4. 输入 Commit message: "Initial commit"
5. 点击 Commit
6. 点击 Publish repository
7. 输入仓库名：`baby-english`
8. 点击 Publish

### 第四步：部署到 Vercel

#### 方法 1：使用 Vercel 官网（最简单）

1. **访问 Vercel**：https://vercel.com
2. **登录**：使用 GitHub 账号登录
3. **导入项目**：
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 找到 `baby-english` 仓库
   - 点击 "Import"
4. **配置部署**：
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认 `./`
   - Build Command: 保持默认
   - Output Directory: 保持默认
5. **点击 Deploy**
6. **等待部署完成**（约 1-2 分钟）
7. **获取公网链接**：
   - 部署成功后会显示类似：`https://baby-english-xxx.vercel.app`
   - 这就是你的永久公网访问地址！

#### 方法 2：使用 Vercel CLI（高级）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署
vercel

# 4. 生产环境部署
vercel --prod
```

### 第五步：测试访问

1. **在手机微信中打开**部署后的链接
2. **测试功能**：
   - ✅ 页面加载正常
   - ✅ 视频列表显示
   - ✅ 点击跳转抖音
   - ✅ 学习记录保存

### 第六步：添加到微信收藏

1. 在微信中打开部署后的链接
2. 点击右上角「···」
3. 选择「收藏」或「浮窗」
4. 以后随时可以访问

---

## 🎉 部署完成后

你将获得：
- ✅ 永久的公网访问链接
- ✅ 自动 HTTPS 加密
- ✅ 全球 CDN 加速
- ✅ 免费使用（Vercel 免费版足够个人使用）
- ✅ 随时随地在微信中使用

---

## 📱 新的访问方式

**部署前**（局域网）：
```
http://192.168.1.227:3000
❌ 必须同一 WiFi
```

**部署后**（公网）：
```
https://baby-english-xxx.vercel.app
✅ 任何地方都能用
```

---

## ⚠️ 注意事项

### 1. 抖音视频链接
- 当前使用的是抖音搜索页面链接
- 如果需要特定视频的直接链接，可以在抖音 APP 中找到后更新 `server.js`

### 2. 学习记录
- 学习记录保存在浏览器本地存储中
- 不同设备的学习记录不互通

### 3. 后续更新
如果需要添加更多视频或修改功能：
```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push
# Vercel 会自动重新部署（约 1 分钟）
```

---

## 🔗 生成新的二维码

部署完成后，访问：
```
https://你的域名.vercel.app/qrcode.html
```
会显示新的二维码，微信扫码即可访问。

---

## 💡 需要帮助？

如果在部署过程中遇到任何问题，请告诉我：
- 具体的错误信息
- 截图（如果有）
- 进行到哪一步

我会帮你解决！

---

**准备开始了吗？** 

请按照上面的步骤操作，或者告诉我你卡在哪一步，我会详细指导你！😊
