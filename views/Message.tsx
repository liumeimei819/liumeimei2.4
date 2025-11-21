import React from 'react';
import { Bell, Search, Check } from 'lucide-react';

const MOCK_MESSAGES = [
  {
    id: 1,
    name: "系统通知",
    avatar: "🔔",
    bg: "bg-brand-pink/10",
    message: "您的领养申请已通过初审，请留意电话通知。",
    time: "14:00",
    unread: 2
  },
  {
    id: 2,
    name: "朝阳爱心救助站",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "好的，布丁最近状态很好，欢迎周末来看它。",
    time: "昨天",
    unread: 0
  },
  {
    id: 3,
    name: "汪星人护卫队",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "感谢您提供的线索，我们正在核实中！",
    time: "星期一",
    unread: 0
  },
  {
    id: 4,
    name: "林小喵",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    message: "请问领养需要什么条件呢？",
    time: "星期日",
    unread: 1
  }
];

export const Message: React.FC = () => {
  return (
    <div className="pb-24 bg-transparent min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-brand-white/90 backdrop-blur-md p-4 pt-12 border-b border-brand-brown/5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-brand-brown">消息</h1>
          <div className="flex gap-4">
            <button className="text-brand-brown text-sm">清除未读</button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
           <input 
            type="text" 
            placeholder="搜索联系人..." 
            className="w-full h-10 bg-white pl-10 pr-4 rounded-full border border-brand-brown/5 focus:outline-none focus:border-brand-pink/50 text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="p-4">
        {MOCK_MESSAGES.map((msg) => (
          <div key={msg.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl mb-3 shadow-sm active:scale-[0.98] transition-transform border border-brand-brown/5">
            <div className="relative">
              {msg.bg ? (
                <div className={`w-14 h-14 rounded-full ${msg.bg} flex items-center justify-center text-2xl`}>
                  {msg.avatar}
                </div>
              ) : (
                <img src={msg.avatar} alt={msg.name} className="w-14 h-14 rounded-full object-cover border border-brand-brown/10" />
              )}
              {msg.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
                  {msg.unread}
                </div>
              )}
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-brand-brown truncate">{msg.name}</h3>
                <span className="text-xs text-brand-gray">{msg.time}</span>
              </div>
              <p className="text-sm text-brand-gray truncate">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* System Status */}
      <div className="px-6 py-4 text-center text-brand-gray/50 text-xs">
        <p>— 保持友善交流 —</p>
      </div>
    </div>
  );
};