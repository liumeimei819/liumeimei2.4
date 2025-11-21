import { Pet, Post, User } from './types';

export const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: '布丁 (Pudding)',
    breed: '中华田园猫',
    gender: 'female',
    age: '6个月',
    distance: '1.2km',
    tags: ['可爱', '粘人'],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: '布丁是在公园被发现的，性格超级好，喜欢被人抱。已经完成了基础体检，身体健康。',
    shelter: {
      name: '朝阳爱心救助站',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.9,
    },
    attributes: {
      vaccinated: true,
      neutered: false,
      dewormed: true,
    }
  },
  {
    id: '2',
    name: '旺财 (Lucky)',
    breed: '柯基串串',
    gender: 'male',
    age: '1岁',
    distance: '2.5km',
    tags: ['活泼', '贪吃'],
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    description: '旺财非常聪明，会握手和坐下。寻找一个能陪它玩飞盘的主人！',
    shelter: {
      name: '流浪天使之家',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5.0,
    },
    attributes: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
    }
  },
  {
    id: '3',
    name: '棉花糖',
    breed: '比熊',
    gender: 'female',
    age: '2岁',
    distance: '3.0km',
    tags: ['安静', '乖巧'],
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    description: '因为主人搬家被遗弃，有点胆小，需要耐心的家人。',
    shelter: {
      name: '温暖驿站',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4.8,
    },
    attributes: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
    }
  },
  {
    id: '4',
    name: '奥利奥',
    breed: '奶牛猫',
    gender: 'male',
    age: '3个月',
    distance: '0.8km',
    tags: ['调皮', '好奇'],
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80',
    description: '精力充沛的小家伙，对世界充满了好奇。',
    shelter: {
      name: '朝阳爱心救助站',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.9,
    },
    attributes: {
      vaccinated: false,
      neutered: false,
      dewormed: true,
    }
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: '101',
    user: { name: '林小喵', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', verified: true },
    content: '今天去救助站当义工，遇到了超级可爱的布丁！希望它能早日找到家🏠 #领养代替购买',
    images: ['https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80'],
    time: '10分钟前',
    location: '朝阳爱心救助站',
    likes: 128,
    comments: 24
  },
  {
    id: '102',
    user: { name: '汪星人护卫队', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', verified: true },
    content: '紧急寻狗！名字叫大黄，在朝阳公园附近走失，脖子上有红色项圈。转发有赏！',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'
    ],
    time: '1小时前',
    location: '朝阳公园',
    likes: 456,
    comments: 89
  }
];

export const CURRENT_USER: User = {
  id: 'u1',
  name: '爱心小天使',
  // Changed to a cartoon animal avatar
  avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg', 
  bio: '愿世间所有生命都被温柔以待 ✨',
  stats: {
    likes: 1200,
    following: 45,
    followers: 89,
    loveValue: 2560
  }
};

export const CATEGORIES = [
  { id: 'adopt', name: '我要领养', icon: '🐾' },
  { id: 'cloud', name: '云养计划', icon: '☁️' },
  { id: 'find', name: '寻宠启事', icon: '🔍' },
  { id: 'map', name: '救助地图', icon: '🗺️' },
  { id: 'wiki', name: '科普百科', icon: '📚' },
];