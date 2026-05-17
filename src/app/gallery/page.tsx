'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: '/tunnel.jpeg', category: 'LED' },
  { id: 2, src: '/summit-main.jpeg', category: 'Corporate' },
  { id: 3, src: '/marvel-awards.jpeg', category: 'Production' },
  { id: 4, src: '/eurokids.jpeg', category: 'LED' },
  { id: 5, src: '/st-bedes.jpeg', category: 'Production' },
  { id: 6, src: '/summit-timeline.jpeg', category: 'Corporate' },
  { id: 7, src: '/bank-event.jpeg', category: 'Corporate' },
  { id: 8, src: '/school-event.jpeg', category: 'Production' },
  { id: 9, src: '/summit-podium.jpeg', category: 'Corporate' },
  { id: 10, src: '/Inidian Overseas Bank.jpeg', category: 'Corporate' },
  { id: 11, src: '/stage-setup.jpeg', category: 'Production' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-grid">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl text-brand-text-primary mb-6"
        >
          Our <span className="text-gradient-gold-amber">Gallery</span>
        </motion.h1>
      </section>

      {/* Categories Removed per Request */}

      {/* Masonry Grid */}
      <section className="max-w-[1400px] mx-auto px-6">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {images.map(img => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-lg break-inside-avoid cursor-zoom-in group border border-white/5"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative w-full" style={{ paddingBottom: img.id % 2 === 0 ? '125%' : '75%' }}>
                  <Image 
                    src={img.src}
                    alt={`Event photography ${img.id}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-brand-text-primary font-serif text-lg tracking-wider uppercase">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center cursor-zoom-out p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-6xl max-h-[90vh] aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt="Selected full screen image"
                fill
                className="object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white hover:text-brand-secondary p-2 bg-black/50 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
