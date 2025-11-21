import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center font-bold rounded-full transition-all duration-300 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-brand-pink text-white shadow-brand-pink/30 shadow-lg hover:brightness-105",
    secondary: "bg-brand-blue text-white shadow-brand-blue/30 shadow-lg hover:brightness-105",
    outline: "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/10",
    ghost: "text-brand-brown hover:bg-brand-brown/5 shadow-none",
  };

  const sizes = {
    sm: "h-8 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
