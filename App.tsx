import React, { useState } from 'react';
import { Home as HomeIcon, Compass, User as UserIcon, Map as MapIcon, MessageCircle } from 'lucide-react';
import { SplashScreen } from './views/SplashScreen';
import { Onboarding } from './views/Onboarding';
import { Home } from './views/Home';
import { Detail } from './views/Detail';
import { Community } from './views/Community';
import { Profile } from './views/Profile';
import { Map } from './views/Map';
import { Message } from './views/Message';
import { PostDetail } from './views/PostDetail';
import { ViewState, Pet, Post } from './types';

export default function App() {
  const [view, setView] = useState<ViewState>('splash');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  // Main Tab State
  const [mainTab, setMainTab] = useState<'home' | 'map' | 'community' | 'message' | 'profile'>('home');

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
    setView('detail');
  };

  const handleBackFromDetail = () => {
    setSelectedPet(null);
    setView('home'); // Go back to main flow
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setView('post-detail');
  };

  const handleBackFromPostDetail = () => {
    setSelectedPost(null);
    // Return to Community View
    setView('community'); 
    setMainTab('community');
  };

  const renderMainView = () => {
    switch (mainTab) {
      case 'home': return <Home onPetClick={handlePetClick} />;
      case 'map': return <Map />;
      case 'community': return <Community onPostClick={handlePostClick} />;
      case 'message': return <Message />;
      case 'profile': return <Profile />;
      default: return <Home onPetClick={handlePetClick} />;
    }
  };

  // Navigation Items Config - All Pink
  const navItems = [
    { id: 'home', icon: HomeIcon, label: '首页', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
    { id: 'map', icon: MapIcon, label: '地图', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
    { id: 'community', icon: Compass, label: '发现', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
    { id: 'message', icon: MessageCircle, label: '消息', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
    { id: 'profile', icon: UserIcon, label: '我的', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
      {/* Phone Frame Container - iPhone 14 Dimensions (390x844) */}
      {/* Added 'transform' class to constrain fixed children to this container */}
      <div 
        className="relative w-[390px] h-[844px] bg-brand-white shadow-2xl overflow-hidden font-cute rounded-[40px] border-[8px] border-gray-900 transform"
      >
        {/* Global Cute Pink Polka Dot Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-25"
          style={{
              backgroundImage: 'radial-gradient(#FF8BB5 2.5px, transparent 2.5px)',
              backgroundSize: '24px 24px'
          }}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Status Bar Placeholder (Not functional, just visual space) */}
          <div className="h-8 w-full bg-transparent z-50 pointer-events-none"></div>

          {/* Route Logic */}
          {view === 'splash' ? (
            <SplashScreen onFinish={() => setView('onboarding')} />
          ) : view === 'onboarding' ? (
            <Onboarding onComplete={() => setView('home')} />
          ) : view === 'detail' && selectedPet ? (
            <Detail pet={selectedPet} onBack={handleBackFromDetail} />
          ) : view === 'post-detail' && selectedPost ? (
            <PostDetail post={selectedPost} onBack={handleBackFromPostDetail} />
          ) : (
            <>
              {/* Main Content Area */}
              <div className="flex-1 pb-20 overflow-y-auto no-scrollbar">
                {renderMainView()}
              </div>

              {/* Custom Bottom Tab Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-brand-brown/5 h-20 pb-4 px-2 flex justify-around items-center z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.02)] rounded-t-[24px]">
                {navItems.map((item) => {
                  const isActive = mainTab === item.id;
                  const Icon = item.icon;
                  
                  return (
                    <button 
                      key={item.id}
                      onClick={() => {
                        setMainTab(item.id as any);
                        // Ensure we aren't in a sub-view (like detail) when clicking a tab
                        setView(item.id as any); 
                      }}
                      className={`flex flex-1 flex-col items-center gap-1 transition-all duration-300 group`}
                    >
                      <div 
                        className={`
                          p-2 rounded-2xl transition-all duration-300 relative
                          ${isActive ? `${item.bg} -translate-y-2 scale-110 shadow-sm` : 'hover:bg-gray-50'}
                        `}
                      >
                        <Icon 
                          size={24} 
                          className={`
                            transition-colors duration-300
                            ${isActive ? item.color : 'text-brand-gray opacity-60 group-hover:opacity-80'}
                          `}
                          fill={isActive ? "currentColor" : "none"} 
                        />
                        {/* Cute bouncing dot for active state */}
                        {isActive && (
                          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${item.color.replace('text-', 'bg-')} animate-bounce`} />
                        )}
                      </div>
                      <span 
                        className={`
                          text-[10px] font-bold transition-all duration-300
                          ${isActive ? item.color : 'text-brand-gray opacity-60'}
                          ${isActive ? '-translate-y-1' : ''}
                        `}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
        
        {/* Home Indicator Bar (iPhone style) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}