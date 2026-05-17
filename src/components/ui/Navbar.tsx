'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 w-full z-50 pointer-events-none flex flex-col items-center pt-4 md:pt-6 transition-all duration-300"
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? "w-[92%] md:w-[85%] max-w-[1100px] rounded-full bg-brand-background/85 backdrop-blur-md border border-brand-secondary/20 px-6 md:px-10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] shadow-[0_0_25px_rgba(245,158,11,0.06)]" 
            : "w-full max-w-[1400px] rounded-none bg-transparent border-transparent px-6 md:px-12 py-1 shadow-none"
        }`}
      >
        <Link href="/" className="relative w-40 h-12 group">
          <Image 
            src="/vt_new_logo_bg.png" 
            alt="Visual Time Logo" 
            fill 
            priority
            loading="eager"
            sizes="(max-width: 768px) 160px, 200px"
            className="object-contain filter brightness-110 group-hover:scale-105 transition-all duration-300"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-brand-text-secondary hover:text-brand-secondary transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="secondary" size="sm">Book Enquiry</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-brand-text-primary hover:text-brand-secondary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-[85px] left-1/2 -translate-x-1/2 w-[92%] bg-brand-background/95 backdrop-blur-lg border border-white/10 rounded-2xl py-6 px-6 flex flex-col space-y-6 shadow-2xl pointer-events-auto"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-text-primary text-xl font-serif tracking-wide border-b border-white/5 pb-2 hover:text-brand-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button variant="secondary" className="w-full">Book Enquiry</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
