# 🚀 Netlify 部署完整指南

## ✅ 配置文件已创建完成

已为你创建好所有必要的文件：
- ✅ `netlify.toml` - Netlify 配置文件
- ✅ `netlify/functions/videos.js` - API 函数（包含所有视频数据）
- ✅ `public/` - 静态网页文件

---

## 📋 部署步骤（5 分钟）

### 步骤 1：访问 Netlify

打开浏览器访问：
```
https://app.netlify.com
```

### 步骤 2：登录

1. 点击 **"Log in"**
2. 选择 **"Continue with GitHub"**
3. 使用你的 GitHub 账号登录（`miaa-cloud`）
4. 授权 Netlify 访问 GitHub

### 步骤 3：创建新站点

1. 登录后，点击 **"Add new site"**
2. 选择 **"Import an existing project"**

### 步骤 4：连接 GitHub 仓库

1. 点击 **"Deploy with GitHub"**
2. 在列表中找到 `miaa-cloud/baby-english` 仓库
3. 点击它

### 步骤 5：配置构建设置

**重要！** 按以下配置：

- **Build command**: 留空（不需要）
- **Publish directory**: 输入 `public`
- **Functions directory**: 输入 `netlify/functions`

### 步骤 6：点击部署

1. 点击 **"Deploy site"**
2. 等待部署完成（约 2-3 分钟）
3. 看到绿色 **"Published"** 表示成功！

---

## 🌐 获得公网链接

部署成功后，你会看到：
- 站点名称：`baby-english-xxx`
- 公网链接：`https://baby-english-xxx.netlify.app`

### 修改站点名称（可选）

1. 点击 **"Site settings"**
2. 点击 **"Change site name"**
3. 输入：`baby-english`
4. 点击 **"Save"**
5. 新链接：`https://baby-english.netlify.app`

---

## 📱 测试访问

### 在电脑浏览器测试

访问你的公网链接：
```
https://baby-english-xxx.netlify.app
```

### 测试 API

访问：
```
https://baby-english-xxx.netlify.app/api/videos/songs
```

应该看到 JSON 格式的视频数据。

### 在微信中测试

1. 打开手机微信
2. 输入你的公网链接
3. 测试所有功能：
   - ✅ 页面加载
   - ✅ 切换分类
   - ✅ 难度筛选
   - ✅ 点击跳转抖音

---

## 🔧 如果遇到问题

### 问题 1：页面 404

**原因**: 发布目录配置错误

**解决**: 
1. 访问 Site settings → Build & deploy
2. 确认 **Publish directory** 是 `public`
3. 点击 **"Trigger deploy"** 重新部署

### 问题 2：API 返回 404

**原因**: 函数目录或重定向配置错误

**解决**:
1. 确认 `netlify.toml` 文件存在
2. 确认 `netlify/functions/videos.js` 文件存在
3. 重新部署

### 问题 3：CORS 错误

**原因**: 跨域配置问题

**解决**: 
- `netlify.toml` 中已配置 CORS headers
- 如果还有问题，清除浏览器缓存后重试

---

## ⚡ 后续更新

修改代码后，有两种部署方式：

### 方式 A：通过 GitHub 自动部署（推荐）

1. 修改代码
2. 提交并推送：
   ```bash
   git add .
   git commit -m "更新说明"
   git push
   ```
3. Netlify 会自动检测并重新部署（约 2 分钟）

### 方式 B：手动拖拽部署

1. 访问 https://app.netlify.com/sites
2. 找到你的站点
3. 点击 **"Deploys"**
4. 拖拽 `public` 文件夹到虚线框内
5. 等待上传完成

---

## 🎉 部署成功后

你将获得：
- ✅ 永久公网链接（HTTPS 加密）
- ✅ 全球 CDN 加速
- ✅ 自动部署（通过 GitHub）
- ✅ 免费使用
- ✅ 支持 API 功能

---

## 📞 需要帮助？

如果在部署过程中遇到问题：

1. 查看部署日志：
   - 点击 **"Deploys"**
   - 点击最新的部署
   - 查看 **"Build log"**

2. 截图错误信息发给我

3. 或告诉我具体的错误描述

---

**现在就开始部署吧！** 🚀

祝你部署成功！
