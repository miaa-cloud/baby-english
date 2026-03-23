const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 视频数据 - SSS 儿歌和亲子口语
const videoData = {
  // SSS 儿歌分类
  songs: [
    {
      id: 'song1',
      title: 'Twinkle Twinkle Little Star',
      chinese: '小星星',
      level: 'beginner',
      levelName: '初级',
      duration: '2:07',
      cover: 'https://i.ytimg.com/vi/YCa9oP78ijE/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YCa9oP78ijE',
      // 抖音视频链接
      douyinUrl: 'https://www.douyin.com/search/Twinkle%20Twinkle%20Little%20Star',
      description: '经典英文儿歌，适合磨耳朵',
      tags: ['经典', '睡前', '安抚']
    },
    {
      id: 'song2',
      title: 'Baby Shark',
      chinese: '鲨鱼宝宝',
      level: 'beginner',
      levelName: '初级',
      duration: '2:16',
      cover: 'https://i.ytimg.com/vi/XqZsoesa55w/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=XqZsoesa55w',
      douyinUrl: 'https://m.douyin.com/qishui/playlist/7501150916012263463',
      description: '超人气儿歌，节奏欢快',
      tags: ['热门', '舞蹈', '互动']
    },
    {
      id: 'song3',
      title: 'The Wheels on the Bus',
      chinese: '公交车的轮子',
      level: 'beginner',
      levelName: '初级',
      duration: '3:25',
      cover: 'https://i.ytimg.com/vi/e_04ZrNroTo/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=e_04ZrNroTo',
      douyinUrl: 'https://www.douyin.com/search/The%20Wheels%20on%20the%20Bus',
      description: '动作模仿类儿歌',
      tags: ['交通工具', '动作', '互动']
    },
    {
      id: 'song4',
      title: 'Five Little Ducks',
      chinese: '五只小鸭子',
      level: 'beginner',
      levelName: '初级',
      duration: '2:45',
      cover: 'https://i.ytimg.com/vi/H4kqXLzqeMU/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=H4kqXLzqeMU',
      douyinUrl: 'https://www.douyin.com/search/Five%20Little%20Ducks',
      description: '数字学习儿歌',
      tags: ['数字', '动物', '计数']
    },
    {
      id: 'song5',
      title: 'If You\'re Happy and You Know It',
      chinese: '如果快乐你就拍拍手',
      level: 'intermediate',
      levelName: '中级',
      duration: '2:30',
      cover: 'https://i.ytimg.com/vi/tySMp_Wl-8k/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=tySMp_Wl-8k',
      douyinUrl: 'https://www.douyin.com/search/If%20You%27re%20Happy%20and%20You%20Know%20It',
      description: '情绪表达和动作指令',
      tags: ['情绪', '动作', '指令']
    },
    {
      id: 'song6',
      title: 'Head Shoulders Knees and Toes',
      chinese: '头肩膀膝盖脚趾',
      level: 'intermediate',
      levelName: '中级',
      duration: '2:15',
      cover: 'https://i.ytimg.com/vi/gqUFACqL418/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=gqUFACqL418',
      douyinUrl: 'https://www.douyin.com/search/Head%20Shoulders%20Knees%20and%20Toes',
      description: '身体部位认知',
      tags: ['身体', '认知', '动作']
    },
    {
      id: 'song7',
      title: 'Old MacDonald Had a Farm',
      chinese: '麦克唐纳爷爷有个农场',
      level: 'intermediate',
      levelName: '中级',
      duration: '3:10',
      cover: 'https://i.ytimg.com/vi/M7wWRBynEts/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=M7wWRBynEts',
      douyinUrl: 'https://www.douyin.com/search/Old%20MacDonald%20Had%20a%20Farm',
      description: '动物叫声学习',
      tags: ['动物', '农场', '声音']
    },
    {
      id: 'song8',
      title: 'The Alphabet Song',
      chinese: '字母歌',
      level: 'advanced',
      levelName: '高级',
      duration: '2:50',
      cover: 'https://i.ytimg.com/vi/hkqIF25jt9k/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=hkqIF25jt9k',
      douyinUrl: 'https://www.douyin.com/search/Alphabet%20Song%20phonics',
      description: '26 个字母学习',
      tags: ['字母', '拼写', '基础']
    },
    {
      id: 'song9',
      title: 'Ten in the Bed',
      chinese: '床上的十个人',
      level: 'advanced',
      levelName: '高级',
      duration: '3:20',
      cover: 'https://i.ytimg.com/vi/DN90CkVztWI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=DN90CkVztWI',
      douyinUrl: 'https://www.douyin.com/search/Ten%20in%20the%20Bed',
      description: '数字倒数学习',
      tags: ['数字', '倒数', '故事']
    },
    {
      id: 'song10',
      title: 'What\'s Your Name?',
      chinese: '你叫什么名字？',
      level: 'advanced',
      levelName: '高级',
      duration: '2:40',
      cover: 'https://i.ytimg.com/vi/5158BTTuJCA/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=5158BTTuJCA',
      douyinUrl: 'https://www.douyin.com/search/What%27s%20Your%20Name%20English%20Song',
      description: '自我介绍对话',
      tags: ['对话', '社交', '名字']
    }
  ],

  // 亲子口语分类
  conversations: [
    {
      id: 'conv1',
      title: 'Good Morning! 早上好!',
      category: 'daily_greeting',
      categoryName: '日常问候',
      level: 'beginner',
      levelName: '初级',
      duration: '1:30',
      cover: 'https://i.ytimg.com/vi/abc123/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E6%97%A9%E5%AE%89%E9%97%AE%E5%80%99',
      description: '早上起床问候语',
      sentences: [
        { english: 'Good morning!', chinese: '早上好！' },
        { english: 'Did you sleep well?', chinese: '睡得好吗？' },
        { english: 'Time to wake up!', chinese: '该起床啦！' }
      ],
      tags: ['问候', '早晨', '日常']
    },
    {
      id: 'conv2',
      title: 'Breakfast Time 吃早餐啦',
      category: 'meal_time',
      categoryName: '用餐时间',
      level: 'beginner',
      levelName: '初级',
      duration: '2:00',
      cover: 'https://i.ytimg.com/vi/def456/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E6%97%A9%E9%A4%90%E5%AF%B9%E8%AF%9D',
      description: '早餐场景对话',
      sentences: [
        { english: 'It\'s breakfast time.', chinese: '该吃早餐了。' },
        { english: 'Do you want milk or juice?', chinese: '你想喝牛奶还是果汁？' },
        { english: 'Yummy yummy!', chinese: '真好吃！' }
      ],
      tags: ['用餐', '食物', '日常']
    },
    {
      id: 'conv3',
      title: 'Getting Dressed 穿衣服',
      category: 'daily_routine',
      categoryName: '日常生活',
      level: 'beginner',
      levelName: '初级',
      duration: '1:45',
      cover: 'https://i.ytimg.com/vi/ghi789/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E7%A9%BF%E8%A1%A3%E6%9C%8D',
      description: '穿衣场景对话',
      sentences: [
        { english: 'Let\'s get dressed.', chinese: '我们来穿衣服吧。' },
        { english: 'Put on your shirt.', chinese: '穿上你的衬衫。' },
        { english: 'Where are your socks?', chinese: '你的袜子在哪里？' }
      ],
      tags: ['穿衣', '日常', '自理']
    },
    {
      id: 'conv4',
      title: 'Play Time 游戏时间',
      category: 'play',
      categoryName: '游戏玩耍',
      level: 'intermediate',
      levelName: '中级',
      duration: '2:30',
      cover: 'https://i.ytimg.com/vi/jkl012/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E6%B8%B8%E6%88%8F%E6%97%B6%E9%97%B4',
      description: '游戏场景对话',
      sentences: [
        { english: 'Do you want to play?', chinese: '你想玩吗？' },
        { english: 'Let\'s build a tower!', chinese: '我们来搭积木吧！' },
        { english: 'Your turn!', chinese: '轮到你了！' }
      ],
      tags: ['游戏', '玩具', '互动']
    },
    {
      id: 'conv5',
      title: 'Bedtime Routine 睡前程序',
      category: 'bedtime',
      categoryName: '睡前时光',
      level: 'intermediate',
      levelName: '中级',
      duration: '2:15',
      cover: 'https://i.ytimg.com/vi/mno345/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E7%9D%A1%E5%89%8D%E7%A8%8B%E5%BA%8F',
      description: '睡前场景对话',
      sentences: [
        { english: 'It\'s bedtime.', chinese: '该睡觉了。' },
        { english: 'Let\'s brush your teeth.', chinese: '我们来刷牙吧。' },
        { english: 'Good night, sweet dreams!', chinese: '晚安，做个好梦！' }
      ],
      tags: ['睡觉', '睡前', '日常']
    },
    {
      id: 'conv6',
      title: 'Potty Training 如厕训练',
      category: 'daily_routine',
      categoryName: '日常生活',
      level: 'intermediate',
      levelName: '中级',
      duration: '1:50',
      cover: 'https://i.ytimg.com/vi/pqr678/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E5%A6%82%E5%8E%95%E8%AE%AD%E7%BB%83',
      description: '如厕训练对话',
      sentences: [
        { english: 'Do you need to go potty?', chinese: '你要上厕所吗？' },
        { english: 'Good job!', chinese: '真棒！' },
        { english: 'Let\'s wash your hands.', chinese: '我们来洗手吧。' }
      ],
      tags: ['如厕', '自理', '习惯']
    },
    {
      id: 'conv7',
      title: 'Shopping Trip 购物',
      category: 'outdoor',
      categoryName: '外出活动',
      level: 'advanced',
      levelName: '高级',
      duration: '2:40',
      cover: 'https://i.ytimg.com/vi/stu901/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E8%B4%AD%E7%89%A9%E5%AF%B9%E8%AF%9D',
      description: '购物场景对话',
      sentences: [
        { english: 'We\'re going shopping.', chinese: '我们要去购物了。' },
        { english: 'What do you want to buy?', chinese: '你想买什么？' },
        { english: 'How much is it?', chinese: '这个多少钱？' }
      ],
      tags: ['购物', '外出', '社交']
    },
    {
      id: 'conv8',
      title: 'At the Park 在公园',
      category: 'outdoor',
      categoryName: '外出活动',
      level: 'advanced',
      levelName: '高级',
      duration: '2:20',
      cover: 'https://i.ytimg.com/vi/vwx234/hqdefault.jpg',
      videoUrl: '',
      douyinUrl: 'https://www.douyin.com/search/%E4%BA%B2%E5%AD%90%E8%8B%B1%E8%AF%AD%E5%85%AC%E5%9B%AD%E6%B8%B8%E7%8E%A9',
      description: '公园游玩对话',
      sentences: [
        { english: 'Let\'s go to the park!', chinese: '我们去公园吧！' },
        { english: 'Do you want to swing or slide?', chinese: '你想荡秋千还是滑滑梯？' },
        { english: 'Be careful!', chinese: '小心点！' }
      ],
      tags: ['公园', '户外', '游玩']
    }
  ]
};

// API: 获取所有分类和分级信息
app.get('/api/categories', (req, res) => {
  const categories = {
    songs: {
      levels: [
        { id: 'beginner', name: '初级', count: videoData.songs.filter(s => s.level === 'beginner').length },
        { id: 'intermediate', name: '中级', count: videoData.songs.filter(s => s.level === 'intermediate').length },
        { id: 'advanced', name: '高级', count: videoData.songs.filter(s => s.level === 'advanced').length }
      ],
      total: videoData.songs.length
    },
    conversations: {
      categories: [
        { id: 'daily_greeting', name: '日常问候', count: videoData.conversations.filter(c => c.category === 'daily_greeting').length },
        { id: 'meal_time', name: '用餐时间', count: videoData.conversations.filter(c => c.category === 'meal_time').length },
        { id: 'daily_routine', name: '日常生活', count: videoData.conversations.filter(c => c.category === 'daily_routine').length },
        { id: 'play', name: '游戏玩耍', count: videoData.conversations.filter(c => c.category === 'play').length },
        { id: 'bedtime', name: '睡前时光', count: videoData.conversations.filter(c => c.category === 'bedtime').length },
        { id: 'outdoor', name: '外出活动', count: videoData.conversations.filter(c => c.category === 'outdoor').length }
      ],
      levels: [
        { id: 'beginner', name: '初级', count: videoData.conversations.filter(c => c.level === 'beginner').length },
        { id: 'intermediate', name: '中级', count: videoData.conversations.filter(c => c.level === 'intermediate').length },
        { id: 'advanced', name: '高级', count: videoData.conversations.filter(c => c.level === 'advanced').length }
      ],
      total: videoData.conversations.length
    }
  };
  res.json(categories);
});

// API: 获取指定分类的视频列表
app.get('/api/videos/:type', (req, res) => {
  const { type } = req.params;
  const { level, category } = req.query;
  
  let videos = [];
  
  if (type === 'songs') {
    videos = videoData.songs;
    if (level) {
      videos = videos.filter(v => v.level === level);
    }
  } else if (type === 'conversations') {
    videos = videoData.conversations;
    if (level) {
      videos = videos.filter(v => v.level === level);
    }
    if (category) {
      videos = videos.filter(v => v.category === category);
    }
  }
  
  res.json(videos);
});

// API: 获取单个视频详情
app.get('/api/video/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const videos = type === 'songs' ? videoData.songs : videoData.conversations;
  const video = videos.find(v => v.id === id);
  
  if (!video) {
    return res.status(404).json({ error: '视频不存在' });
  }
  
  res.json(video);
});

// API: 获取推荐视频（一键播放）
app.get('/api/recommend/:type', (req, res) => {
  const { type } = req.params;
  const { level } = req.query;
  
  let videos = type === 'songs' ? videoData.songs : videoData.conversations;
  
  if (level) {
    videos = videos.filter(v => v.level === level);
  }
  
  // 返回前 5 个推荐
  const recommended = videos.slice(0, 5);
  res.json(recommended);
});

// 首页
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 测试页面
app.get('/test-links.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'test-douyin-links.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(` 婴儿英语启蒙工具已启动`);
  console.log(`📱 本地访问：http://localhost:${PORT}`);
  console.log(`📱 手机访问：http://<你的IP 地址>:${PORT}`);
  console.log(`⏰ 启动时间：${new Date().toLocaleString('zh-CN')}`);
  console.log(`\n💡 提示:`);
  console.log(`   1. 运行 check-ip.bat 或 setup-mobile.bat 查看手机访问地址`);
  console.log(`   2. 确保手机和电脑在同一 WiFi 网络`);
  console.log(`   3. 如果无法访问，请检查防火墙设置`);
});
