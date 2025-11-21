
import React, { useEffect, useState } from 'react';
import { PawPrint, Heart, Home } from 'lucide-react';

interface Props {
  onFinish: () => void;
}

export const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence of animations
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 1600);
    const timer3 = setTimeout(() => setStep(3), 2400);
    const finish = setTimeout(onFinish, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className="h-full min-h-screen w-full bg-brand-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background - Rotating slowly */}
      <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl animate-[spin_10s_linear_infinite]" />
      <div className="absolute bottom-[-20%] left-[-20%] w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-[spin_15s_linear_infinite_reverse]" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center w-full">
        
        {/* Animated Icon Sequence Container */}
        <div className="h-48 w-full flex items-center justify-center relative perspective-1000">
          
          {/* Step 0: Bouncing Pink Paw */}
          <div className={`absolute transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${step === 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            <div className="w-24 h-24 bg-brand-pink rounded-3xl rotate-3 shadow-[0_20px_40px_rgba(255,139,181,0.4)] flex items-center justify-center border-4 border-white animate-bounce-slow">
               <PawPrint className="text-white w-12 h-12" />
            </div>
          </div>

           {/* Step 1: Bouncing Blue Heart */}
           <div className={`absolute transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${step === 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            <div className="w-28 h-28 bg-brand-blue rounded-full shadow-[0_20px_40px_rgba(126,196,207,0.4)] flex items-center justify-center border-4 border-white animate-pulse-slow">
               <Heart className="text-white w-14 h-14 fill-white" />
            </div>
          </div>

          {/* Step 2: Bouncing Yellow Home */}
          <div className={`absolute transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${step === 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            <div className="w-32 h-32 bg-brand-yellow rounded-[2rem] -rotate-3 shadow-[0_20px_40px_rgba(255,209,102,0.4)] flex items-center justify-center border-4 border-white">
               <Home className="text-white w-16 h-16" />
            </div>
          </div>

           {/* Step 3: Final Brand Logo Reveal - The "Big Bang" */}
           <div className={`absolute transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
            <div className="relative">
                {/* Burst Rings */}
                <div className={`absolute inset-0 rounded-[2.5rem] border-4 border-brand-pink scale-150 opacity-0 ${step >= 3 ? 'animate-[ping_1s_cubic-bezier(0,0,0.2,1)_forwards]' : ''}`}></div>
                <div className={`absolute inset-0 rounded-[2.5rem] bg-brand-pink/20 scale-125 opacity-0 ${step >= 3 ? 'animate-[ping_1.2s_cubic-bezier(0,0,0.2,1)_0.1s_forwards]' : ''}`}></div>

                <div className="w-40 h-40 bg-gradient-to-br from-brand-pink to-brand-pink/90 rounded-[2.5rem] flex items-center justify-center shadow-2xl transform ring-8 ring-white/60">
                    <PawPrint size={72} className="text-white drop-shadow-lg" />
                </div>
            </div>
          </div>
        </div>

        {/* Text Reveal */}
        <div className="text-center overflow-hidden h-28 mt-6">
          <h1 className={`text-5xl font-cute text-brand-brown mb-3 tracking-wide transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            WanderHome
          </h1>
          <p className={`text-brand-pink text-xl font-bold flex items-center justify-center gap-2 transition-all duration-700 delay-200 transform ${step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <span>🐾</span> 让爱不再流浪 <span>🐾</span>
          </p>
        </div>
      </div>

      {/* Custom Lottie-style Loading Bar */}
      <div className={`absolute bottom-20 transition-opacity duration-500 ${step >= 3 ? 'opacity-0' : 'opacity-100'}`}>
         <div className="flex gap-3">
            <div className="w-3 h-3 bg-brand-pink rounded-full animate-[bounce_0.6s_infinite] delay-0"></div>
            <div className="w-3 h-3 bg-brand-blue rounded-full animate-[bounce_0.6s_infinite] delay-100"></div>
            <div className="w-3 h-3 bg-brand-yellow rounded-full animate-[bounce_0.6s_infinite] delay-200"></div>
         </div>
      </div>
      
      {/* Final "Enter" hint */}
      <p className={`absolute bottom-16 text-sm text-brand-gray/60 font-medium transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          准备好开启旅程了吗？
      </p>
    </div>
  );
};
