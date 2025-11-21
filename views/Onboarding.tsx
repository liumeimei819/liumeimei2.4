import React, { useState } from 'react';
import { ArrowRight, Heart, Home, Smile } from 'lucide-react';
import { Button } from '../components/Button';

interface Props {
  onComplete: () => void;
}

const SLIDES = [
  {
    icon: <Home size={80} className="text-brand-pink" />,
    title: "给它一个温暖的家",
    desc: "成千上万的流浪动物正在等待\n一个温暖的拥抱",
    color: "from-brand-pink/20 to-brand-yellow/20"
  },
  {
    icon: <Heart size={80} className="text-brand-blue" />,
    title: "传递爱的力量",
    desc: "每一次领养都是一次重生\n让爱心不断传递",
    color: "from-brand-blue/20 to-brand-green/20"
  },
  {
    icon: <Smile size={80} className="text-brand-yellow" />,
    title: "遇见命中注定",
    desc: "在这里找到你的灵魂伴侣\n开启全新生活",
    color: "from-brand-yellow/20 to-brand-pink/20"
  }
];

export const Onboarding: React.FC<Props> = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < SLIDES.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="h-full min-h-screen w-full bg-brand-white flex flex-col relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl" />
         <div className="absolute bottom-[100px] left-[-30px] w-32 h-32 bg-brand-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="flex-1 relative overflow-hidden z-10">
        {/* Slide Content */}
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex flex-col items-center justify-center p-8 pb-32">
              <div className={`w-64 h-64 rounded-[50px] bg-gradient-to-br ${slide.color} flex items-center justify-center mb-12 animate-float shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-4 border-white`}>
                {slide.icon}
              </div>
              <h2 className="text-3xl font-bold text-brand-brown mb-4 text-center">{slide.title}</h2>
              <p className="text-brand-gray text-center whitespace-pre-line leading-relaxed text-lg">
                {slide.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators - Bottom Left */}
      <div className="absolute bottom-10 left-8 z-20 flex gap-3">
        {SLIDES.map((_, idx) => (
          <div 
            key={idx}
            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
              current === idx ? 'w-8 bg-brand-pink' : 'w-2.5 bg-brand-brown/20'
            }`}
          />
        ))}
      </div>

      {/* Next Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <Button 
             onClick={handleNext} 
             size="md"
             className="rounded-full shadow-lg shadow-brand-pink/20 px-6"
        >
            {current === SLIDES.length - 1 ? "立即体验" : "下一步"}
            <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};