import React from 'react';
import { Settings, Edit2, Award, ChevronRight, Clock, Heart, FileText, Grid, Star, Sparkles } from 'lucide-react';
import { CURRENT_USER } from '../constants';

export const Profile: React.FC = () => {
  return (
    <div className="pb-24 bg-transparent min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-[20%] left-[-20px] text-brand-pink opacity-10 rotate-45">
        <Star size={60} fill="currentColor" />
      </div>
      <div className="absolute top-[10%] right-[20%] text-brand-blue opacity-20">
        <Sparkles size={30} />
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-brand-pink/10 to-brand-white/80 backdrop-blur-sm pt-12 pb-6 px-6 relative z-10">
        <div className="flex justify-end mb-4">
          <Settings className="text-brand-brown opacity-60" size={24} />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img src={CURRENT_USER.avatar} alt="avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover" />
            <div className="absolute bottom-0 right-0 bg-brand-yellow text-white text-xs px-2 py-0.5 rounded-full border-2 border-white font-bold shadow-sm">Lv.5</div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-brand-brown flex items-center gap-2">
              {CURRENT_USER.name}
              <div className="bg-white p-1 rounded-full shadow-sm">
                 <Edit2 size={14} className="text-brand-pink" />
              </div>
            </h2>
            <p className="text-sm text-brand-gray mt-1 line-clamp-1">{CURRENT_USER.bio}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between bg-white rounded-2xl p-4 shadow-sm border border-brand-brown/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-12 h-12 bg-brand-pink/5 rounded-bl-full"></div>
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="font-bold text-lg text-brand-brown">{CURRENT_USER.stats.likes}</div>
            <div className="text-xs text-brand-gray">获赞</div>
          </div>
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="font-bold text-lg text-brand-brown">{CURRENT_USER.stats.following}</div>
            <div className="text-xs text-brand-gray">关注</div>
          </div>
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="font-bold text-lg text-brand-brown">{CURRENT_USER.stats.followers}</div>
            <div className="text-xs text-brand-gray">粉丝</div>
          </div>
          <div className="text-center flex-1">
            <div className="font-bold text-lg text-brand-pink">{CURRENT_USER.stats.loveValue}</div>
            <div className="text-xs text-brand-gray">爱心值</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 mb-6 relative z-10">
        <h3 className="text-lg font-bold text-brand-brown mb-3 px-2">我的服务</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: '我的领养', icon: <Heart className="text-brand-pink" />, bg: 'bg-brand-pink/10' },
            { name: '我的发布', icon: <FileText className="text-brand-blue" />, bg: 'bg-brand-blue/10' },
            { name: '浏览历史', icon: <Clock className="text-brand-yellow" />, bg: 'bg-brand-yellow/10' },
            { name: '更多功能', icon: <Grid className="text-brand-green" />, bg: 'bg-brand-green/10' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-xl active:bg-gray-50 transition-colors cursor-pointer hover:shadow-sm bg-white border border-brand-brown/5">
              <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-1`}>
                {item.icon}
              </div>
              <span className="text-xs text-brand-brown font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="px-4 space-y-3 relative z-10">
        {[
          { icon: <Award size={20} />, text: '我的勋章', badge: '新获得' },
          { icon: <Heart size={20} />, text: '爱心捐助', badge: '' },
          { icon: <FileText size={20} />, text: '领养协议', badge: '' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-brand-brown/5 active:scale-[0.98] transition-transform cursor-pointer">
            <div className="flex items-center gap-3 text-brand-brown">
              <div className="bg-brand-gray/10 p-2 rounded-full text-brand-gray group-hover:text-brand-pink group-hover:bg-brand-pink/10 transition-colors">
                {item.icon}
              </div>
              <span className="font-medium">{item.text}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.badge && <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">{item.badge}</span>}
              <ChevronRight size={18} className="text-brand-gray/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};