import React from 'react';
import { MapPin, Navigation, Search, Trees, Cloud, Bone, Tent, PawPrint, House, Cat, Dog, Fish, Bird, Rabbit, Heart, Sun, Star } from 'lucide-react';

export const Map: React.FC = () => {
  return (
    <div className="h-screen w-full bg-transparent relative overflow-hidden pb-20">
      {/* Simulated Map Background with more cuteness and pink dots */}
      <div className="absolute inset-0 bg-[#E5F0F2] opacity-60">
        {/* Grid Lines */}
        <div className="w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(#7EC4CF 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      {/* Pink Polka Dots Overlay */}
      <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-10"
          style={{
              backgroundImage: 'radial-gradient(#FF8BB5 2.5px, transparent 2.5px)',
              backgroundSize: '24px 24px'
          }}
      />

      {/* Background Gradient Blobs */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[-50px] w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Extra Soft Gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Map Elements - Making it look alive */}
      <div className="absolute top-[10%] left-[5%] text-brand-green opacity-40">
         <Trees size={48} />
      </div>
      <div className="absolute top-[15%] right-[10%] text-brand-green opacity-30">
         <Trees size={36} />
      </div>
      <div className="absolute bottom-[30%] left-[15%] text-brand-green opacity-30">
         <Trees size={40} />
      </div>
      <div className="absolute bottom-[40%] right-[5%] text-brand-green opacity-40">
         <Trees size={56} />
      </div>

      {/* Decorative Clouds */}
      <div className="absolute top-[20%] left-[30%] text-white opacity-60 animate-float" style={{ animationDuration: '8s' }}>
         <Cloud size={48} fill="currentColor" />
      </div>
      <div className="absolute top-[40%] right-[20%] text-white opacity-50 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
         <Cloud size={64} fill="currentColor" />
      </div>

      {/* Cute elements: Paw Prints scattered */}
      <div className="absolute top-[25%] left-[40%] text-brand-brown/10 rotate-12">
        <PawPrint size={24} />
      </div>
      <div className="absolute bottom-[35%] right-[40%] text-brand-brown/10 rotate-[-12deg]">
        <PawPrint size={24} />
      </div>
      <div className="absolute top-[60%] left-[20%] text-brand-brown/10 rotate-[45deg]">
        <PawPrint size={20} />
      </div>
      <div className="absolute top-[15%] left-[50%] text-brand-pink/10 rotate-[15deg]">
        <PawPrint size={18} />
      </div>

      {/* Cute elements like bones, tents, fish */}
      <div className="absolute bottom-[25%] right-[30%] text-brand-yellow opacity-40 rotate-45">
         <Bone size={24} fill="currentColor" />
      </div>
      <div className="absolute top-[35%] left-[10%] text-brand-pink opacity-40 rotate-[-12deg]">
         <Tent size={32} />
      </div>
      <div className="absolute top-[25%] right-[35%] text-brand-blue opacity-20 rotate-[15deg]">
         <Fish size={28} fill="currentColor" />
      </div>
      <div className="absolute bottom-[15%] left-[40%] text-brand-brown opacity-10 rotate-[-30deg]">
         <PawPrint size={40} />
      </div>
      <div className="absolute top-[50%] left-[20%] text-brand-green opacity-20">
         <Bird size={24} />
      </div>
      <div className="absolute bottom-[50%] right-[10%] text-brand-brown/10">
         <Dog size={30} />
      </div>
      <div className="absolute top-[5%] right-[40%] text-brand-pink/10 rotate-12">
         <Cat size={28} />
      </div>

      {/* Search Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10 bg-gradient-to-b from-white/80 to-transparent pt-12">
        <div className="bg-white rounded-full shadow-lg p-3 flex items-center gap-2 border border-brand-brown/5">
          <Search size={20} className="text-brand-gray ml-2" />
          <input 
            type="text" 
            placeholder="搜索附近的救助站、宠物店..." 
            className="flex-1 bg-transparent outline-none text-brand-brown placeholder:text-brand-gray/70"
          />
        </div>
      </div>

      {/* Cartoon Map Markers (Unique Icons) */}
      
      {/* Marker 1 - Shelter (House) */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group z-10 hover:scale-110 transition-transform">
        <div className="bg-brand-pink text-white px-3 py-1 rounded-full text-xs font-bold shadow-md mb-1 opacity-100 transition-opacity whitespace-nowrap border-2 border-white">
          朝阳爱心站 🏠
        </div>
        <div className="w-14 h-14 bg-brand-pink rounded-full border-4 border-white shadow-lg flex items-center justify-center relative">
             <House size={28} className="text-white" fill="currentColor" />
             <div className="absolute -bottom-1 w-3 h-3 bg-brand-pink rotate-45"></div>
        </div>
      </div>

      {/* Marker 2 - Pet Store (Bone) */}
      <div className="absolute top-1/2 right-8 transform flex flex-col items-center cursor-pointer group z-10 hover:scale-110 transition-transform">
         <div className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-md mb-1 opacity-100 transition-opacity whitespace-nowrap border-2 border-white">
          萌宠乐园 🦴
        </div>
         <div className="w-12 h-12 bg-brand-blue rounded-full border-4 border-white shadow-lg flex items-center justify-center relative">
             <Bone size={24} className="text-white" fill="currentColor" />
             <div className="absolute -bottom-1 w-2 h-2 bg-brand-blue rotate-45"></div>
        </div>
      </div>

      {/* Marker 3 - Park/Nature (Sun) */}
       <div className="absolute bottom-1/3 left-10 transform flex flex-col items-center cursor-pointer group z-10 hover:scale-110 transition-transform">
         <div className="bg-brand-yellow text-white px-3 py-1 rounded-full text-xs font-bold shadow-md mb-1 opacity-100 transition-opacity whitespace-nowrap border-2 border-white">
          阳光草地 ☀️
        </div>
        <div className="w-12 h-12 bg-brand-yellow rounded-full border-4 border-white shadow-lg flex items-center justify-center relative">
             <Sun size={24} className="text-white" fill="currentColor" />
             <div className="absolute -bottom-1 w-2 h-2 bg-brand-yellow rotate-45"></div>
        </div>
      </div>

      {/* Bottom Panel - Moved Up to bottom-44 to reveal full card without scroll */}
      <div className="absolute bottom-44 left-4 right-4 bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-brand-brown/5 z-20">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 flex items-center justify-center relative">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-14 h-14 rounded-xl object-cover" />
            <div className="absolute -bottom-1 -right-1 bg-brand-green text-white text-[8px] px-1.5 py-0.5 rounded-full border border-white">
              营业中
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-brand-brown text-lg">朝阳爱心救助站</h3>
            <p className="text-xs text-brand-gray mb-1 flex items-center gap-1">
              <MapPin size={10} /> 距离 1.2km · 北京市朝阳区
            </p>
            <div className="flex gap-2 mt-2">
               <span className="text-[10px] text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full font-bold">可领养 12</span>
               <span className="text-[10px] text-brand-pink bg-brand-pink/10 px-2 py-0.5 rounded-full font-bold">需要义工</span>
            </div>
          </div>
          <button className="bg-brand-blue text-white w-12 h-12 rounded-full shadow-lg shadow-brand-blue/30 hover:scale-105 transition-transform flex items-center justify-center">
            <Navigation size={24} fill="currentColor" className="text-white/90" />
          </button>
        </div>
      </div>
    </div>
  );
};