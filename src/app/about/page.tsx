'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  const fadeUpVariant: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-32 pb-24 bg-grid">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-20 md:mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-secondary tracking-[0.3em] text-sm md:text-base uppercase mb-6 drop-shadow-lg"
        >
          Our Story
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-brand-text-primary mb-6"
        >
          Behind the <span className="text-brand-secondary italic">Curtain</span>
        </motion.h1>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16 md:gap-24 items-center w-full mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl md:text-5xl text-brand-text-primary mb-8 leading-snug">
            We don't just plan events. <br/>
            <span className="text-brand-secondary italic">We stage experiences.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-brand-text-secondary text-lg leading-relaxed mb-6">
            Visual Time was founded in Kodambakkam, Chennai, with a singular vision: to bring cinematic storytelling and technical excellence into the world of LED technology and corporate production. Over the past 26 years, what started as a collective of passionate AV engineers and event designers has evolved into one of South India's premier boutique technical firms.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="text-brand-text-secondary text-lg leading-relaxed mb-8">
            Our approach isn't about simply providing equipment. It's about lighting, staging, technical precision, and atmosphere. We treat every corporate launch, conference, or LED installation like a high-end film production—ensuring every detail is a carefully crafted masterpiece of technical brilliance.
          </motion.p>
        </motion.div>
        
        <div className="w-full lg:w-1/2 relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/corporate_summit.png" 
            alt="Visual Time corporate event setup" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-surface border-y border-white/5 mb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-text-primary mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Cinematic Visuals', desc: 'High-resolution LED walls and intelligent lighting designed to captivate your audience.' },
              { title: 'Technical Precision', desc: 'From pixel-pitch alignment to sound engineering, we accept nothing but technical perfection.' },
              { title: 'Corporate Narrative', desc: 'Every production is bespoke, engineered to reflect your brand identity and event goals.' }
            ].map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 border border-white/5 rounded-xl bg-brand-background/50 hover:border-brand-secondary/30 transition-colors"
              >
                <div className="text-brand-secondary text-4xl mb-6 font-serif">0{idx + 1}</div>
                <h3 className="text-brand-text-primary text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-6 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-brand-text-primary mb-8"
        >
          Let's Write Your <span className="text-brand-secondary italic">Next Chapter</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-text-secondary text-lg mb-12"
        >
          Partner with Chennai's premier LED and corporate production firm. We're ready to bring your technical vision to life with cinematic clarity.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">Get in Touch</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
