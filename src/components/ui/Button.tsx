import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "bg-brand-surface text-brand-text-primary border border-brand-secondary/20 relative overflow-hidden group hover:border-brand-secondary/60 shadow-[0_0_20px_rgba(0,229,255,0.05)]",
    secondary: "bg-brand-secondary text-black font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.7)]",
    outline: "border border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary hover:text-black tracking-widest uppercase text-sm",
    ghost: "text-brand-text-secondary hover:text-brand-text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  if (variant === 'primary') {
    return (
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
