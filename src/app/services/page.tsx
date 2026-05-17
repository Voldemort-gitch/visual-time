'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TiltCard } from '@/components/ui/TiltCard';

export default function ServicesPage() {
  const services = [
    {
      title: "LED Screen Rental",
      description: "As Chennai's premier LED specialists, we provide high-resolution indoor and outdoor LED video walls. Our screens feature peak brightness, exceptional color depth, and seamless mechanical alignment, ensuring your visuals are cinematic and impactful.",
      features: ["Indoor P2.5 & P3 High-Res", "Outdoor P3.9 Weatherproof", "Creative Curved Configurations", "Live Video Processing"],
      image: "/eurokids.jpeg"
    },
    {
      title: "Corporate Event Management",
      description: "We transform standard corporate gatherings into immersive brand experiences. From award ceremonies to press conferences, we handle every detail—pacing, staging, and logistics—with the precision your brand deserves.",
      features: ["Annual General Meetings", "Awards & Recognition Galas", "Press & Media Launches", "Executive Retreats"],
      image: "/summit-main.jpeg"
    },
    {
      title: "Technical Production",
      description: "The backbone of any great event is its technical execution. We provide end-to-end AV production, including professional sound reinforcement, stage lighting, and broadcast-quality camera setups.",
      features: ["Pro Audio Systems", "Intelligent Stage Lighting", "Multi-Cam Broadcast", "Technical Directing"],
      image: "/marvel-awards.jpeg"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-grid min-h-screen">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl text-brand-text-primary mb-6 text-glow"
        >
          Our <span className="text-gradient-gold-amber">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-text-secondary text-lg"
        >
          Premium technical solutions and professional management for high-stakes corporate environments.
        </motion.p>
      </section>

      {/* Services List */}
      <section className="max-w-[1200px] mx-auto px-6 flex flex-col gap-32 relative z-10">
        {services.map((service, idx) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <TiltCard className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group glass-card cursor-pointer">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="p-8 border border-white/5 rounded-xl bg-brand-surface hover:border-brand-secondary/30 transition-all duration-300"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>
            </TiltCard>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text-primary mb-6">{service.title}</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-8">{service.description}</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-sm text-brand-text-primary before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-brand-secondary before:rounded-full before:mr-3">
                    {feature}
                  </li>
                ))}
              </ul>

              <div>
                <Link href="/contact">
                  <Button variant="outline">Inquire Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
