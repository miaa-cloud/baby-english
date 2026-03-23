# 🚀 使用 Vercel CLI 部署（无需网页登录）

## 前提条件
- 已安装 Node.js（运行 `node -v` 检查）
- 已安装 npm（运行 `npm -v` 检查）

---

## 步骤 1：安装 Vercel CLI

打开命令提示符或 PowerShell，执行：

```bash
npm install -g vercel
```

等待安装完成（约 1-2 分钟）

---

## 步骤 2：登录 Vercel

执行：
```bash
vercel login
```

然后选择登录方式：
- 输入 `Y` 选择 GitHub 登录
- 会打开浏览器让你授权
- 授权后返回命令行

**如果网页授权失败**，可以选择邮箱登录：
- 输入 `N` 跳过 GitHub
- 输入你的邮箱地址
- 查收验证码邮件
- 输入验证码完成登录

---

## 步骤 3：部署项目

在项目目录中执行：

```bash
cd "c:\Users\Administrator\Desktop\通义灵码\baby-english"
vercel
```

第一次部署会问几个问题：

```
? Set up and deploy "~\Desktop\通义灵码\baby-english"? [Y/n]
→ 输入 Y

? Which scope do you want to deploy to?
→ 选择你的账号（如果有多个）

? Link to existing project? [y/N]
→ 输入 N（创建新项目）

? What's your project's name?
→ 输入 baby-english

? In which directory is your code located?
→ 直接回车（默认当前目录）

? Want to override the settings file? [y/N]
→ 输入 N（使用 vercel.json）
```

---

## 步骤 4：生产环境部署

第一次部署后，执行以下命令部署到生产环境：

```bash
vercel --prod
```

你会看到类似输出：
```
🔍  Inspect: https://vercel.com/miaa-cloud/baby-english/xxx
✅  Production: https://baby-english.vercel.app
```

**https://baby-english.vercel.app** 就是你的公网访问地址！

---

## 🎉 部署完成

现在可以：
1. 在手机微信中打开 `https://baby-english.vercel.app`
2. 测试所有功能
3. 添加到微信收藏

---

## 📱 生成二维码

访问：`https://baby-english.vercel.app/qrcode.html`
查看并保存二维码

---

## ⚡ 后续更新

修改代码后，只需执行：

```bash
git push  # 推送到 GitHub
vercel --prod  # 部署到生产环境
```

Vercel 会自动部署（约 1 分钟）

---

## 💡 常见问题

### Q1: npm 安装失败？
**A**: 可能是网络问题，尝试使用淘宝镜像：
```bash
npm config set registry https://registry.npmmirror.com
npm install -g vercel
```

### Q2: 登录时浏览器没有打开？
**A**: 手动复制命令行中的链接到浏览器打开

### Q3: 部署失败？
**A**: 查看错误信息，通常是：
- vercel.json 配置错误
- 缺少依赖包
- Node.js 版本问题

---

**祝你部署成功！** 🎊
