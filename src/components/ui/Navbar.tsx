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
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-brand-secondary/10 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative h-12 w-48 block">
          <Image 
            src="/logo_new.png" 
            alt="Visual Time Logo" 
            fill 
            className="object-contain object-left"
            priority
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-brand-text-secondary hover:text-brand-secondary transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="secondary" size="sm">Book Consultation</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-brand-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-background border-b border-white/5 py-6 px-6 flex flex-col space-y-6 shadow-2xl"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-text-primary text-xl font-serif tracking-wide border-b border-white/5 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button variant="secondary" className="w-full">Book Consultation</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
