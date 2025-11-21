import React, { useState } from 'react';
import { ChevronLeft, Heart, Share2, Play, MessageCircle, Check, MapPin } from 'lucide-react';
import { Pet } from '../types';
import { Button } from '../components/Button';

interface Props {
  pet: Pet;
  onBack: () => void;
}

export const Detail: React.FC<Props> = ({ pet, onBack }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-transparent h-full flex flex-col relative">
      
      {/* Scrollable Content with Slide Up Bounce Animation */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 animate-slide-up-bounce origin-bottom">
          {/* Media Header */}
          <div className="relative h-96 w-full">
            <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
              <button onClick={onBack} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-90">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-90">
                  <Play size={20} fill="currentColor" />
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-90">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Content Body - Overlapping the image */}
          <div className="relative -mt-10 rounded-t-[32px] bg-brand-white/95 backdrop-blur-sm p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] min-h-[500px]">
            {/* Basic Info */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-brand-brown flex items-center gap-2">
                  {pet.name}
                  {pet.gender === 'female' ? 
                    <span className="text-brand-pink text-2xl">♀</span> : 
                    <span className="text-brand-blue text-2xl">♂</span>
                  }
                </h1>
                <p className="text-brand-gray mt-1 flex items-center gap-2">
                  <MapPin size={14} /> {pet.distance} · {pet.shelter.name}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-pink">{pet.age}</div>
                <div className="text-xs text-brand-gray">年龄</div>
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="flex justify-between gap-4 mb-8">
              <div className="flex-1 bg-white p-3 rounded-2xl text-center shadow-sm border border-brand-brown/5">
                <div className="text-sm text-brand-gray mb-1">品种</div>
                <div className="font-bold text-brand-brown">{pet.breed}</div>
              </div>
              <div className="flex-1 bg-white p-3 rounded-2xl text-center shadow-sm border border-brand-brown/5">
                <div className="text-sm text-brand-gray mb-1">健康</div>
                <div className="font-bold text-brand-green">已体检</div>
              </div>
              <div className="flex-1 bg-white p-3 rounded-2xl text-center shadow-sm border border-brand-brown/5">
                <div className="text-sm text-brand-gray mb-1">疫苗</div>
                <div className="font-bold text-brand-blue">{pet.attributes.vaccinated ? '已接种' : '未接种'}</div>
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-brand-brown mb-3">关于它的故事 📖</h3>
              <div className="bg-white p-5 rounded-2xl shadow-sm text-brand-brown leading-relaxed border border-brand-brown/5">
                {pet.description}
              </div>
            </div>

            {/* Shelter Info */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-brand-brown mb-3">救助站信息 🏠</h3>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-brand-brown/5">
                <div className="flex items-center gap-3">
                  <img src={pet.shelter.avatar} alt="shelter" className="w-12 h-12 rounded-full border border-brand-brown/10" />
                  <div>
                    <div className="font-bold text-brand-brown">{pet.shelter.name}</div>
                    <div className="text-xs text-brand-yellow flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">联系</Button>
              </div>
            </div>
          </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-brand-brown/5 p-4 px-6 flex items-center gap-4 z-30 pb-8 md:pb-4 safe-area-bottom animate-slide-up-bounce" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform" onClick={() => setIsLiked(!isLiked)}>
          <Heart 
            size={24} 
            className={`transition-colors ${isLiked ? 'fill-brand-pink text-brand-pink' : 'text-brand-brown'}`} 
          />
          <span className="text-[10px] text-brand-gray">收藏</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer ml-2 mr-2 active:scale-90 transition-transform">
          <MessageCircle size={24} className="text-brand-brown" />
          <span className="text-[10px] text-brand-gray">咨询</span>
        </div>
        <div className="flex-1">
           <Button fullWidth className="rounded-full shadow-xl hover:shadow-brand-pink/40">
            申请领养
           </Button>
        </div>
      </div>
    </div>
  );
};