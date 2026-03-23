# 👶 婴儿英语启蒙工具

一个专为 0-6 岁婴儿设计的英语启蒙工具，支持 SSS 级英语启蒙儿歌和亲子口语场景教学。

## ✨ 功能特点

### 🎵 SSS 儿歌分类
- **初级**：Twinkle Twinkle Little Star, Baby Shark 等经典儿歌
- **中级**：Head Shoulders Knees and Toes, Old MacDonald 等互动儿歌
- **高级**：Alphabet Song, What's Your Name 等学习儿歌

### 💬 亲子口语分类
- **日常问候**：Good Morning, 早上好
- **用餐时间**：Breakfast Time, 吃早餐啦
- **日常生活**：Getting Dressed, Potty Training
- **游戏玩耍**：Play Time, 游戏时间
- **睡前时光**：Bedtime Routine, 睡前程序
- **外出活动**：Shopping Trip, At the Park

### 🎯 核心功能
- ✅ **难度分级**：初级/中级/高级，循序渐进
- ✅ **场景分类**：儿歌/亲子口语，按需选择
- ✅ **一键播放**：快速开始磨耳朵
- ✅ **学习记录**：自动记录学习历史
- ✅ **收藏功能**：收藏喜欢的内容
- ✅ **微信适配**：完美适配微信 H5 页面

## 🚀 快速开始

### 1. 安装依赖

```bash
cd baby-english
npm install
```

### 2. 启动服务

```bash
npm start
```

### 3. 访问应用

- **浏览器访问**：http://localhost:3000
- **微信访问**：将链接发送到微信，在微信中打开

## 📱 微信使用

### 在微信中打开
1. 将服务器部署到公网可访问的地址
2. 将链接发送到微信
3. 在微信中点击链接即可使用

### 分享给朋友
点击微信右上角"..." → 发送给朋友

## 📂 项目结构

```
baby-english/
├── server.js              # 后端服务器
├── public/
│   └── index.html         # 前端页面（微信 H5）
├── .env                   # 环境配置
├── package.json           # 项目配置
└── README.md              # 说明文档
```

## 🎨 界面预览

### 首页
- 顶部：应用标题和标语
- 分类导航：SSS 儿歌 / 亲子口语 切换
- 一键播放按钮
- 难度筛选：初级/中级/高级
- 视频卡片列表

### 播放页
- 视频播放器
- 视频信息（标题、描述、难度、时长）
- 常用句子列表（亲子口语）

### 底部导航
- 🏠 首页
- 📚 学习记录
- ⭐ 收藏
- 👤 我的

## 🔧 自定义配置

### 添加视频内容

编辑 `server.js` 文件中的 `videoData` 对象：

```javascript
const videoData = {
  songs: [
    {
      id: 'song11',
      title: 'Your Song Title',
      chinese: '中文标题',
      level: 'beginner',
      levelName: '初级',
      duration: '2:30',
      cover: '封面图片 URL',
      videoUrl: '视频链接',
      douyinUrl: '抖音视频链接',
      description: '视频描述',
      tags: ['标签 1', '标签 2']
    }
  ],
  conversations: [
    {
      id: 'conv9',
      title: 'Your Conversation',
      category: 'daily_greeting',
      categoryName: '日常问候',
      level: 'beginner',
      levelName: '初级',
      sentences: [
        { english: 'English sentence', chinese: '中文翻译' }
      ]
    }
  ]
}
```

### 修改难度级别

难度级别分为三级：
- `beginner` - 初级 🌱
- `intermediate` - 中级 🌿
- `advanced` - 高级 🌳

### 修改分类

亲子口语分类：
- `daily_greeting` - 日常问候
- `meal_time` - 用餐时间
- `daily_routine` - 日常生活
- `play` - 游戏玩耍
- `bedtime` - 睡前时光
- `outdoor` - 外出活动

## 📊 API 接口

### 获取分类信息
```
GET /api/categories
```

### 获取视频列表
```
GET /api/videos/:type?level=beginner&category=daily_greeting
```

### 获取推荐视频
```
GET /api/recommend/:type?level=beginner
```

### 获取视频详情
```
GET /api/video/:type/:id
```

## 💡 使用建议

### 0-2 岁宝宝
- 选择**初级**儿歌
- 以磨耳朵为主
- 每天 15-20 分钟

### 3-4 岁宝宝
- 选择**初级/中级**内容
- 儿歌 + 简单口语
- 每天 20-30 分钟

### 5-6 岁宝宝
- 选择**中级/高级**内容
- 跟读 + 对话练习
- 每天 30-40 分钟

## 🔐 数据存储

- **学习记录**：存储在浏览器 localStorage
- **收藏内容**：存储在浏览器 localStorage
- **数据持久化**：清除浏览器缓存会丢失数据

## 📝 待开发功能

- [ ] 视频播放器集成（抖音/西瓜视频）
- [ ] 离线下载功能
- [ ] 学习进度统计
- [ ] 家长控制设置
- [ ] 多账号支持
- [ ] 微信小程序版本

## 📞 技术支持

如有问题，请检查：
1. 浏览器控制台错误信息
2. 服务器日志输出
3. 网络连接状态

## 📄 License

ISC
