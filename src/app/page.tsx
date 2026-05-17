'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TiltCard } from '@/components/ui/TiltCard';

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const orbsY = useTransform(scrollY, [0, 1000], ['0%', '-50%']);

  const [currentBg, setCurrentBg] = useState(0);
  const heroBackgrounds = [
    '/marvel-awards.jpeg',
    '/eurokids.jpeg',
    '/summit-main.jpeg',
    '/stage-setup.jpeg',
    '/school-event.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fadeUpVariant: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Cinematic Ambient Orbs */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen animate-orb-breath-1"></div>
      <div className="absolute top-[50%] right-[-5%] w-[700px] h-[700px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen animate-orb-breath-2"></div>

      {/* Hero Content Section (Rendered First at Top of Page) */}
      <section className="relative flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
          className="relative z-10 text-center max-w-4xl px-6 md:px-12"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-center mb-6">
            <div className="relative w-64 md:w-80 h-20 md:h-28">
              <Image
                src="/vt_new_logo_bg.png"
                alt="Visual Time Logo"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 256px, 320px"
                className="object-contain filter"
              />
            </div>
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-text-primary mb-6 leading-snug tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Rental - Service Provider of <br />
            <span className="text-gradient-gold-amber text-glow-gold">LED Video Wall&apos;s &amp;</span> <br />
            <span className="text-gradient-gold-amber text-glow-gold">Audio &amp; Video Equipment&apos;s</span>
          </motion.h1>

          <motion.div variants={fadeUpVariant} className="mt-6 mb-8 text-center bg-brand-surface/40 p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-text-primary mb-4">Event Categories We Cover</h3>
            <div className="flex flex-col gap-3 text-brand-text-secondary text-base md:text-lg">
              <p>» Corporate Events <span className="text-brand-secondary mx-2">|</span> Pharmaceutical Events</p>
              <p>» Doctor&apos;s Conference <span className="text-brand-secondary mx-2">|</span> Govt - Conferences &amp; Workshop Events</p>
              <p>» School &amp; Colleges Events <span className="text-brand-secondary mx-2">|</span> Product Launches</p>
              <p>» Social Events <span className="text-brand-secondary mx-2">|</span> Brand Promotions <span className="text-brand-secondary mx-2">|</span> Photography &amp; Videography</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg">Our Services</Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg">Explore Portfolio</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Cinematic Split LED Screen Showcase (3-Pane Matrix) */}
      <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden border-b border-white/5 bg-brand-background">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full gap-2 p-2">
          {/* Pane 1 (LED Visuals / Focus 1) */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-brand-surface/40">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentBg}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={heroBackgrounds[currentBg]}
                  alt="Cinematic LED Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-90 saturate-110"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10 pointer-events-none"></div>
          </div>

          {/* Pane 2 (Stage Production / Focus 2) */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-brand-surface/40">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={(currentBg + 1) % heroBackgrounds.length}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={heroBackgrounds[(currentBg + 1) % heroBackgrounds.length]}
                  alt="Cinematic Stage Event"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-90 saturate-110"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10 pointer-events-none"></div>
          </div>

          {/* Pane 3 (Professional Sound / Focus 3) */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-brand-surface/40">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={(currentBg + 2) % heroBackgrounds.length}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={heroBackgrounds[(currentBg + 2) % heroBackgrounds.length]}
                  alt="Professional Event Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-90 saturate-110"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full border-b border-white/5">
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
              src="/vt_new_logo_bg.png"
              alt="Visual Time Logo"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8 md:p-16 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/5 to-transparent pointer-events-none rounded-3xl"></div>
          </div>

          <div className="flex flex-col">
            <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text-primary mb-8 leading-snug">
              Elevating moments into <br />
              <span className="text-brand-secondary">timeless memories.</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-brand-text-secondary text-lg leading-relaxed mb-8">
              Established in 2001, Visual Time is a specialist rental service provider for professional Audio &amp; Visual equipment. We provide expert consultancy and reliable support for everything from national conferences and product launches to high-resolution LED video wall installations. Our mission is to ensure your event&apos;s success through technical excellence and cost-effective solutions.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <Link href="/about" className="inline-flex items-center text-brand-secondary hover:text-white transition-colors duration-300 font-medium tracking-wide uppercase text-sm group">
                <span className="mr-2">Learn Our Story</span>
                <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
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
              { num: "01", title: "LED Screen Rental", desc: "High-resolution indoor and outdoor LED video walls for cinematic clarity at your launch, concert, or conference." },
              { num: "02", title: "Corporate Events", desc: "Professional technical production management for conferences, medical summits, product launches, and gala celebrations." },
              { num: "03", title: "Technical Production", desc: "Bespoke end-to-end sound reinforcement, stage lighting, and professional AV rigging for seamless event execution." }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="cursor-pointer h-full"
              >
                <Link href="/services" className="block h-full">
                  <TiltCard className="group relative overflow-hidden rounded-2xl bg-brand-background/40 p-8 md:p-10 border border-white/5 hover:border-brand-secondary/30 transition-all duration-500 shadow-2xl backdrop-blur-sm flex flex-col justify-between h-full min-h-[300px]">
                    <div className="flex flex-col">
                      <span className="text-3xl font-serif text-brand-secondary/40 group-hover:text-brand-secondary transition-colors duration-500 font-bold mb-6 block">
                        {service.num}
                      </span>
                      <h3 className="font-serif text-2xl text-brand-text-primary mb-4 group-hover:text-brand-secondary transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-brand-text-secondary text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm text-brand-secondary/70 group-hover:text-brand-secondary uppercase tracking-wider font-semibold transition-all duration-500">
                      <span>Explore Service</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-500">&rarr;</span>
                    </div>
                  </TiltCard>
                </Link>
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
            Words From Our <span className="text-gradient-gold-amber">Clients</span>
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
              <span className="absolute top-6 left-8 text-brand-secondary/10 text-8xl font-serif">&quot;</span>
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

      {/* Client Marquee Section */}
      <section className="relative py-24 bg-brand-surface/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-text-primary mb-4"
          >
            Our <span className="text-gradient-gold-amber text-glow-gold">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-brand-text-secondary uppercase tracking-[0.2em] text-xs"
          >
            Trusted by Chennai&apos;s Leading Organizations &amp; Institutions
          </motion.p>
        </div>

        {/* Subtle fading mask overlays on both sides */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-full overflow-hidden relative z-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex gap-20 items-center whitespace-nowrap w-max group/marquee"
          >
            {[
              "Sun pharmaceuticals Ltd",
              "Tata Teleservices Ltd",
              "Madras Cricket Club",
              "Tata Motors Ltd",
              "Indo - Amercian Association commitee (IACC)",
              "Indian Shoe Federation",
              "VNC steel Disturbutors",
              "Ministry of Small,Medium, Enterprises.(MSME)",
              "Euro Kids School",
              "Aaditya International School"
            ].map((client) => (
              <span
                key={client}
                className="text-2xl md:text-3xl font-serif opacity-50 group-hover/marquee:opacity-20 hover:!opacity-100 transition-all duration-300 cursor-default client-hover-glow"
              >
                {client}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "Sun pharmaceuticals Ltd",
              "Tata Teleservices Ltd",
              "Madras Cricket Club",
              "Tata Motors Ltd",
              "Indo - Amercian Association commitee (IACC)",
              "Indian Shoe Federation",
              "VNC steel Disturbutors",
              "Ministry of Small,Medium, Enterprises.(MSME)",
              "Euro Kids School",
              "Aaditya International School"
            ].map((client) => (
              <span
                key={`${client}-clone`}
                className="text-2xl md:text-3xl font-serif opacity-50 group-hover/marquee:opacity-20 hover:!opacity-100 transition-all duration-300 cursor-default client-hover-glow"
              >
                {client}
              </span>
            ))}
          </motion.div>
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
            <Button variant="secondary" size="lg">Schedule an Enquiry</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
