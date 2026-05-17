'use client';

import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize cursor position around card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation (max 10 degrees)
    const rotateX = -mouseY * 12;
    const rotateY = mouseX * 12;

    // Calculate mouse coordinates relative to the card for glossy reflection effect
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (!card) return;

    requestAnimationFrame(() => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glossy Overlay Reflection Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.08 : 0,
          background: `radial-gradient(
            250px circle at ${coords.x}px ${coords.y}px,
            rgba(255, 255, 255, 0.8),
            transparent 80%
          )`,
        }}
      />
      {children}
    </div>
  );
}
