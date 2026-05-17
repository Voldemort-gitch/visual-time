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
          className="text-gradient-gold-amber font-semibold tracking-[0.3em] text-sm md:text-base uppercase mb-6 drop-shadow-lg"
        >
          Our Story
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-brand-text-primary mb-6"
        >
          Behind the <span className="text-gradient-gold-amber">Curtain</span>
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
            We don&apos;t just plan events. <br/>
            <span className="text-gradient-gold-amber">We stage experiences.</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
            <p>
              Visual Time is a specialist in Rental service provider for Audio &amp; Visual Equipments. Established in 2001 in still with the Illusion, we are dealing with National, Multinational Corporate as our Client. We provide Professional Consultancy and Reliable Support for all types of Events &amp; Functions.
            </p>
            <p>
              Our Specialized Fields are: Conferences, Seminars, and Exhibitions, Opening Ceremonies, Product Launches, Small Meetings and many more... Our team is filled with experts who are very dedicated to co-creating your event and have the drive to always provide top-notch and personalized service to ensure that your event is a resounding success.
            </p>
            <p>
              On top of it all, we keep the cost low and affordable without compromising on the quality of service. We are Rental service provider for LED Video Wall available in various sizes / series according to your need. Therefore we are holding huge capacity of size, upgrade materials, &amp; Experienced Technicians.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="w-full lg:w-1/2 relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/school-event.jpeg" 
            alt="Visual Time school annual day stage production" 
            fill 
            priority
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
              { title: 'Our Vision', desc: 'To be well-recognized for our Professional Standard & Efficiency while operating with our High Quality Equipments & Excellent Services for our clients.' },
              { title: 'Our Mission', desc: 'To understand the business needs & requirements of our clients. Outfitted with experience, the Professionals at Active Visual provide cost effective solutions with Professional Services tailored to their needs.' },
              { title: 'Our Aim', desc: 'To ENSURE YOUR EVENT SUCCESS! We offer the most competitive pricing in the market without compromising on the quality of service.' }
            ].map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 border border-white/5 rounded-xl bg-brand-surface hover:border-brand-secondary/30 transition-all duration-300"
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
          Let&apos;s Write Your <span className="text-gradient-gold-amber">Next Chapter</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-text-secondary text-lg mb-12"
        >
          Partner with Chennai&apos;s premier LED and corporate production firm. We&apos;re ready to bring your technical vision to life with cinematic clarity.
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
