'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const orbsY = useTransform(scrollY, [0, 1000], ['0%', '-50%']);

  const fadeUpVariant: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="flex flex-col w-full relative bg-grid">
      {/* Cinematic Ambient Orbs */}
      <motion.div style={{ y: orbsY }} className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"></motion.div>
      <motion.div style={{ y: backgroundY }} className="absolute top-[50%] right-[-5%] w-[700px] h-[700px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen"></motion.div>

      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 border-b border-white/5">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 scale-110 transform origin-top">
          <Image 
            src="/led_hero.png" 
            alt="High-resolution professional LED video wall on a corporate stage" 
            fill 
            sizes="100vw"
            priority
            className="object-cover object-center filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-brand-background/40"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
          className="relative z-10 text-center max-w-4xl px-6 md:px-12"
        >
          <motion.p variants={fadeUpVariant} className="text-brand-secondary tracking-[0.3em] text-sm md:text-base uppercase mb-6 drop-shadow-lg">
            Chennai's Premier LED & Corporate Event Specialists
          </motion.p>
          <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-text-primary mb-8 leading-tight drop-shadow-xl">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-[#F5E1A4] to-[#8A6A22]">Cinematic</span> LED & Event Solutions
          </motion.h1>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg">Discover Our Services</Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg">Explore Portfolio</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Venues Banner */}
      <section className="py-12 border-b border-white/5 bg-brand-surface/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-center text-brand-text-secondary text-sm uppercase tracking-[0.3em] mb-8">Trusted by Premium Venues</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {['ITC GRAND CHOLA', 'RADISSON BLU', 'TAJ COROMANDEL', 'RADHA REGENT'].map((venue, idx) => (
              <span key={idx} className="font-serif text-lg md:text-2xl text-brand-text-primary tracking-widest">{venue}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          <div className="relative aspect-square w-full md:w-4/5 mx-auto flex items-center justify-center p-8 bg-brand-surface/30 rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">
            <Image 
              src="/logo.png" 
              alt="Visual Time Logo" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8 md:p-16 group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(201,162,78,0.2)]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/5 to-transparent pointer-events-none rounded-3xl"></div>
          </div>
          
          <div className="flex flex-col">
            <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text-primary mb-8 leading-snug">
              Elevating moments into <br/>
              <span className="italic text-brand-secondary">timeless memories.</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-brand-text-secondary text-lg leading-relaxed mb-8">
              At Visual Time, we believe that technical excellence is the foundation of every great event. Based in Kodambakkam, Chennai, we bring over 26 years of unparalleled expertise in providing high-end LED rental solutions and professional corporate production. From large-scale conferences to immersive product launches, our meticulous approach ensures every technical detail is nothing short of cinematic.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <Link href="/about" className="inline-flex items-center text-brand-secondary hover:text-white transition-colors duration-300 font-medium tracking-wide uppercase text-sm group">
                <span className="mr-4">Learn Our Story</span>
                <span className="w-12 h-[1px] bg-brand-secondary group-hover:bg-white group-hover:w-16 transition-all duration-300"></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 md:py-32 bg-brand-surface border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text-primary mb-4">Our Expertise</h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto">Meticulously planned and flawlessly executed bespoke events, tailored to your vision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "LED Screen Rental", desc: "High-resolution indoor and outdoor LED video walls for cinematic clarity.", img: "/led_service.png" },
              { title: "Corporate Events", desc: "Professional management for conferences, launches, and gala celebrations.", img: "/corporate_event.png" },
              { title: "Technical Production", desc: "End-to-end AV, lighting, and sound for seamless event execution.", img: "/social_event.png" }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <div className="absolute flex inset-0 z-0">
                  <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/40 to-transparent"></div>
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 border border-white/5 rounded-2xl group-hover:border-brand-secondary/40 transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-brand-text-primary mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                  <p className="text-brand-text-secondary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 mb-6">{service.desc}</p>
                  <Link href="/services" className="text-sm text-brand-secondary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Explore &rarr;</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-brand-text-primary mb-4"
          >
            Words From Our <span className="text-brand-secondary italic">Clients</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-text-secondary uppercase tracking-[0.2em] text-sm"
          >
            Experience the Difference
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {[
            { quote: "The LED video walls provided by Visual Time were the highlight of our annual summit. The clarity, brightness, and technical support were world-class. Truly Chennai's best.", author: "Arjun M.", type: "Tech Conference" },
            { quote: "The sheer professionalism and high-end aesthetic they brought to our product launch was unmatched. They elevated our brand through incredible visual production.", author: "Rajesh S.", type: "Product Launch" }
          ].map((testimonial, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 30 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }} 
               transition={{ delay: idx * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} 
               className="p-10 md:p-14 bg-brand-surface/30 border border-white/5 rounded-3xl relative overflow-hidden group hover:border-brand-secondary/30 transition-colors duration-500"
             >
                <span className="absolute top-6 left-8 text-brand-secondary/10 text-8xl font-serif">"</span>
                <p className="text-xl md:text-2xl text-brand-text-primary leading-relaxed mb-10 relative z-10 font-serif italic">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col border-t border-white/10 pt-6 relative z-10">
                  <span className="text-brand-secondary font-medium tracking-wide uppercase text-sm mb-1">{testimonial.author}</span>
                  <span className="text-brand-text-secondary text-sm">{testimonial.type}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary/10 via-brand-background to-brand-background"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-brand-text-primary mb-8 leading-tight text-glow">Ready to escalate your technical production?</h2>
          <p className="text-brand-text-secondary text-lg mb-12">Connect with our team to discuss your LED rental or corporate event needs.</p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Schedule a Consultation</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
