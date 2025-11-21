import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Plus, MapPin, PawPrint, Sparkles, Bone, Fish, Cat, Dog, Bird, Rabbit, Cloud, Star } from 'lucide-react';
import { MOCK_POSTS } from '../constants';
import { Post } from '../types';

interface Props {
  onPostClick: (post: Post) => void;
}

export const Community: React.FC<Props> = ({ onPostClick }) => {
  const [activeTab, setActiveTab] = useState<'recommend' | 'local'>('recommend');

  return (
    <div className="pb-24 bg-transparent min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none"></div>
      
      {/* Soft Gradient Blobs */}
      <div className="absolute top-20 right-[-50px] w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-[-50px] w-60 h-60 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Cute Icons Background */}
      <div className="absolute top-20 left-[-20px] text-brand-blue opacity-10 rotate-12 pointer-events-none">
        <MessageCircle size={80} fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-[-30px] text-brand-pink opacity-5 rotate-[-15deg] pointer-events-none">
        <Heart size={120} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 left-10 text-brand-yellow opacity-10 pointer-events-none animate-pulse">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-40 right-10 text-brand-brown opacity-5 rotate-12 pointer-events-none">
        <PawPrint size={60} />
      </div>
      
      {/* Added Elements for Cuteness */}
      <div className="absolute top-32 right-[20%] text-brand-brown/5 rotate-[20deg] pointer-events-none">
         <PawPrint size={30} />
      </div>
      <div className="absolute top-48 left-[15%] text-brand-brown/5 rotate-[-10deg] pointer-events-none">
         <PawPrint size={24} />
      </div>
       <div className="absolute bottom-32 left-[40%] text-brand-brown/5 rotate-[30deg] pointer-events-none">
         <PawPrint size={40} />
      </div>

      <div className="absolute top-40 right-20 text-brand-green opacity-10 rotate-[25deg] pointer-events-none">
         <Bone size={32} />
      </div>
      <div className="absolute top-28 left-20 text-brand-pink opacity-5 rotate-[-10deg] pointer-events-none">
         <Cat size={44} />
      </div>
      <div className="absolute bottom-20 left-1/2 text-brand-blue opacity-5 rotate-[5deg] pointer-events-none">
         <Fish size={50} />
      </div>
      <div className="absolute top-1/2 right-5 text-brand-brown opacity-5 rotate-[-20deg] pointer-events-none">
         <Dog size={36} />
      </div>
      <div className="absolute bottom-1/3 left-[-10px] text-brand-yellow opacity-10 rotate-12 pointer-events-none">
         <Bird size={40} />
      </div>
      <div className="absolute top-[15%] right-1/3 text-brand-pink opacity-5 pointer-events-none">
         <Rabbit size={36} />
      </div>
       <div className="absolute top-24 right-1/4 text-brand-blue opacity-5 pointer-events-none animate-float">
         <Cloud size={40} fill="currentColor" />
      </div>
      <div className="absolute top-[60%] left-[10%] text-brand-yellow opacity-20 rotate-45">
         <Star size={28} />
      </div>
      <div className="absolute bottom-[10%] right-[20%] text-brand-pink opacity-10">
         <Heart size={32} />
      </div>

      {/* Header Tabs */}
      <div className="sticky top-0 z-20 bg-brand-white/90 backdrop-blur-md pt-12 pb-2 px-4 border-b border-brand-brown/5">
        <div className="flex justify-center gap-8 relative">
          <button 
            onClick={() => setActiveTab('recommend')}
            className={`text-lg font-bold transition-colors ${activeTab === 'recommend' ? 'text-brand-brown scale-110' : 'text-brand-gray'}`}
          >
            推荐
          </button>
          <button 
            onClick={() => setActiveTab('local')}
            className={`text-lg font-bold transition-colors ${activeTab === 'local' ? 'text-brand-brown scale-110' : 'text-brand-gray'}`}
          >
            同城
          </button>
          
          {/* Indicator */}
          <div 
            className={`absolute bottom-[-8px] w-6 h-1 bg-brand-pink rounded-full transition-all duration-300 ${
              activeTab === 'recommend' ? 'left-[calc(50%-4rem)]' : 'left-[calc(50%+2.5rem)]'
            }`} 
          />
        </div>
      </div>

      {/* Feed */}
      <div className="p-4 space-y-6 relative z-10">
        {MOCK_POSTS.map((post) => (
          <div 
            key={post.id} 
            onClick={() => onPostClick(post)}
            className="bg-white rounded-3xl p-5 shadow-sm border border-brand-brown/5 cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full border border-brand-brown/10" />
                <div>
                  <div className="font-bold text-brand-brown text-sm flex items-center gap-1">
                    {post.user.name}
                    {post.user.verified && <span className="text-brand-blue text-[10px]">✓</span>}
                  </div>
                  <div className="text-xs text-brand-gray">{post.time}</div>
                </div>
              </div>
              <button className="text-brand-gray hover:bg-brand-gray/10 p-1 rounded-full">•••</button>
            </div>

            {/* Content */}
            <p className="text-brand-brown mb-3 leading-relaxed text-sm line-clamp-3">
              {post.content}
            </p>

            {/* Images */}
            {post.images.length > 0 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3 rounded-xl pointer-events-none">
                {post.images.map((img, idx) => (
                  <img key={idx} src={img} alt="post" className="h-48 w-auto rounded-xl object-cover" />
                ))}
              </div>
            )}

            {/* Location Tag */}
            <div className="inline-flex items-center gap-1 bg-brand-blue/5 text-brand-blue text-xs px-2 py-1 rounded-full mb-4">
              <MapPin size={10} />
              {post.location}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center border-t border-brand-brown/5 pt-3">
              <button className="flex items-center gap-1 text-brand-gray hover:text-brand-pink transition-colors group">
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-brand-gray hover:text-brand-blue transition-colors group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 text-brand-gray hover:text-brand-yellow transition-colors group">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty Space for scrolling past FAB */}
        <div className="h-12"></div>
      </div>

      {/* FAB - Fixed position works because of parent transform */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-brand-pink to-brand-yellow rounded-full shadow-lg shadow-brand-pink/30 flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 z-50 border-2 border-white">
        <Plus size={28} />
      </button>
    </div>
  );
};