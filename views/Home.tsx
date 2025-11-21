
import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Search, Bell, Heart, Cloud, Sun, Sparkles, PawPrint, Cat, Gift } from 'lucide-react';
import { MOCK_PETS, CATEGORIES } from '../constants';
import { Pet } from '../types';

interface Props {
  onPetClick: (pet: Pet) => void;
}

const BANNER_SLIDES = [
  {
    id: 1,
    tag: '# 领养代替购买',
    title1: '给流浪的它',
    title2: '一个温暖的家 🏠',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-brand-pink via-[#FF9EBF] to-brand-yellow'
  },
  {
    id: 2,
    tag: '# 爱心公益',
    title1: '加入我们',
    title2: '成为志愿者 🤝',
    image: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-brand-blue via-[#A0E8F3] to-brand-green'
  },
  {
    id: 3,
    tag: '# 守护生命',
    title1: '每一次转发',
    title2: '都是一份希望 ❤️',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-brand-yellow via-[#FFE5A0] to-brand-pink'
  }
];

export const Home: React.FC<Props> = ({ onPetClick }) => {
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Auto-play banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Allow horizontal scrolling with mouse wheel for better UX
  useEffect(() => {
    const el = categoryScrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <div className="relative min-h-full pb-24 no-scrollbar bg-transparent">
      {/* Cute Background Elements (Absolute Positioned) */}
      <div className="absolute top-20 right-[-20px] text-brand-yellow opacity-20 animate-float pointer-events-none">
        <Sun size={80} />
      </div>
      <div className="absolute top-40 left-[-20px] text-brand-blue opacity-10 animate-float pointer-events-none" style={{animationDelay: '1s'}}>
        <Cloud size={60} />
      </div>
      <div className="absolute top-60 right-10 text-brand-pink opacity-10 rotate-12 pointer-events-none">
        <PawPrint size={40} />
      </div>
      <div className="fixed bottom-32 left-[-10px] text-brand-green opacity-10 rotate-[-12deg] pointer-events-none z-0">
        <PawPrint size={60} />
      </div>

      {/* Top Nav & Header */}
      <div className="sticky top-0 z-20 bg-brand-white/90 backdrop-blur-md rounded-b-[30px] shadow-sm border-b border-brand-brown/5 px-5 pt-2 pb-4 transition-all">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-xs text-brand-gray mb-0.5 flex items-center gap-1">
              Hi, 早上好 <Sun size={12} className="text-brand-yellow"/>
            </span>
            <div className="flex items-center text-brand-brown font-bold text-lg bg-white/50 py-1 px-3 rounded-full self-start border border-brand-brown/5">
              <MapPin size={16} className="text-brand-pink mr-1.5" fill="currentColor" />
              <span>北京市 · 朝阳区</span>
            </div>
          </div>
          <div className="relative bg-white p-2 rounded-full shadow-sm border border-brand-brown/5 active:scale-95 transition-transform cursor-pointer hover:bg-brand-pink/5">
            <Bell size={22} className="text-brand-brown" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
          </div>
        </div>
        
        {/* Search Bar with Decorations */}
        <div className="relative z-30 mt-4 mb-2">
          {/* Decoration: Cat peering over */}
          <div className={`absolute -top-8 right-8 text-brand-brown transition-all duration-500 z-0 ${isSearchFocused ? 'translate-y-2 scale-110' : 'translate-y-6'}`}>
             <Cat size={36} fill="#FFD166" className="text-brand-brown drop-shadow-sm" />
          </div>
          {/* Decoration: Ribbon on left */}
          <div className={`absolute -top-4 -left-2 text-brand-pink -rotate-12 z-10 pointer-events-none transition-all duration-500 ${isSearchFocused ? 'animate-wiggle scale-110' : ''}`}>
             <Gift size={28} fill="#FF8BB5" className="text-white drop-shadow-sm" />
          </div>

          <div className={`relative group transition-all duration-500 transform ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
            {/* Background Glow Layer */}
            <div className={`absolute inset-0 rounded-2xl bg-brand-pink/20 blur-xl transition-opacity duration-500 ${isSearchFocused ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-20">
               <Search className={`transition-colors duration-300 ${isSearchFocused ? 'text-brand-pink' : 'text-brand-gray'}`} size={18} />
            </div>
            <input 
              type="text" 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="搜索品种、救助站..." 
              className={`w-full h-12 bg-white pl-11 pr-12 rounded-2xl border-2 transition-all duration-300 outline-none text-sm relative z-10
                ${isSearchFocused 
                  ? 'border-brand-pink shadow-[0_0_20px_rgba(255,139,181,0.25)] ring-4 ring-brand-pink/10 text-brand-brown' 
                  : 'border-transparent shadow-sm text-brand-gray'
                }
                placeholder:text-brand-gray/60
              `}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-yellow/20 p-1.5 rounded-lg z-20">
               <Sparkles size={14} className={`text-brand-yellow ${isSearchFocused ? 'animate-spin' : ''}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="px-4 mt-4">
        <div className="relative w-full h-44 rounded-[30px] overflow-hidden shadow-lg shadow-brand-pink/20 group cursor-pointer transform transition-transform hover:scale-[1.02]">
          {BANNER_SLIDES.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out bg-gradient-to-r ${slide.gradient} ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
               <img src={slide.image} alt="Banner" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
               
               <div className="absolute inset-0 p-6 flex flex-col justify-center text-white z-20">
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full self-start mb-2 border border-white/30">
                    <span className="text-xs font-bold">{slide.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 drop-shadow-sm">{slide.title1}</h3>
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-sm text-white/90">{slide.title2}</h3>
               </div>
               
               {/* Decorative Paws */}
               <PawPrint className="absolute bottom-4 right-4 text-white/30 rotate-[-12deg]" size={40} />
               <PawPrint className="absolute top-4 right-20 text-white/20 rotate-[12deg]" size={24} />
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {BANNER_SLIDES.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentBanner ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories (King Kong Area) - Scrollable with Mouse Wheel */}
      <div className="relative w-full mt-2">
        {/* Fade effect on the right to indicate scroll */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-white to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={categoryScrollRef}
          className="flex overflow-x-auto no-scrollbar px-4 gap-5 py-4 pr-8 touch-pan-x"
        >
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center min-w-[72px] shrink-0 space-y-2 group cursor-pointer active:scale-95 transition-transform">
              <div className="w-16 h-16 rounded-[24px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex items-center justify-center text-3xl border-2 border-white group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
              </div>
              <span className="text-xs font-bold text-brand-brown/80">{cat.name}</span>
            </div>
          ))}
          {/* Dummy spacer for end of list padding */}
          <div className="w-2 shrink-0"></div>
        </div>
      </div>

      {/* Recommendation List */}
      <div className="px-4 pb-4 relative z-10">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-xl font-bold text-brand-brown flex items-center gap-2">
            <Sparkles size={20} className="text-brand-yellow" />
            缘分推荐
          </h3>
          <button className="text-xs text-brand-gray bg-white px-3 py-1.5 rounded-full border border-brand-brown/5 hover:bg-brand-pink/10 hover:text-brand-pink transition-colors">
            查看更多 &gt;
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {MOCK_PETS.map((pet) => (
            <div 
              key={pet.id} 
              onClick={() => onPetClick(pet)}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(255,139,181,0.15)] transition-all active:scale-95 cursor-pointer group border border-brand-brown/5"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={pet.image} alt="pet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-brand-gray hover:text-brand-pink transition-all shadow-sm hover:scale-110">
                  <Heart size={18} />
                </button>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-bold text-brand-brown flex items-center gap-1 shadow-sm">
                  <MapPin size={10} className="text-brand-pink" />
                  {pet.distance}
                </div>
              </div>
              <div className="p-3.5">
                <div className="flex justify-between items-start mb-1">
                  {/* Changed to text-gray-800 for dark gray consistent styling */}
                  <h4 className="font-bold text-lg font-cute text-gray-800">{pet.name}</h4>
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold flex items-center justify-center h-6 ${pet.gender === 'male' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-pink/10 text-brand-pink'}`}>
                    {pet.gender === 'male' ? '♂' : '♀'}
                  </span>
                </div>
                <p className="text-xs text-brand-gray mb-2.5">{pet.breed} · {pet.age}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pet.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] text-brand-brown/70 bg-brand-brown/5 px-2 py-1 rounded-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
