'use client';

import React, { useEffect, useRef } from 'react';

export function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Use requestAnimationFrame for ultra-smooth 144Hz performance
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouse-x', `${x}px`);
          containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-all duration-300"
      style={{
        background: `radial-gradient(
          600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
          rgba(var(--stage-glow-color), 0.035),
          transparent 80%
        )`,
      }}
    />
  );
}
