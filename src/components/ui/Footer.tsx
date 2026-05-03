import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand-background text-brand-text-secondary border-t border-white/5 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="relative w-32 h-10 block mb-6">
            <Image 
              src="/vt_new_logo_bg.png" 
              alt="Visual Time Logo" 
              fill 
              sizes="128px"
              className="object-contain filter brightness-110"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Pioneering premium LED rental solutions and corporate event production in Chennai for over 26 years. From high-resolution video walls to seamless corporate management.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-brand-text-primary text-lg mb-6 tracking-wider">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">LED Video Walls Indoor</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">LED Video Walls Outdoor</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">LED Video Walls Curved</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Stage Fabrication</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Sound &amp; Lights</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">LCD Projectors</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Video and Photography</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-brand-text-primary text-lg mb-6 tracking-wider">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/gallery" className="hover:text-brand-secondary transition-colors">Our Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-brand-secondary text-lg mb-6 tracking-wider uppercase text-glow">Contact Us</h4>
          <address className="not-italic text-sm space-y-4">
            <p className="flex items-center text-brand-text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-brand-secondary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Kodambakkam, Chennai
            </p>
            <div className="pt-2 space-y-3">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-brand-secondary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919840068568" className="hover:text-brand-secondary transition-colors">+91 98400 68568</a>
              </p>
              <p className="flex items-center ml-7">
                <a href="tel:+919840082127" className="hover:text-brand-secondary transition-colors">+91 98400 82127</a>
              </p>
            </div>
            <p className="mt-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-brand-secondary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:enquiry@visualtime.in" className="hover:text-brand-secondary transition-colors">enquiry@visualtime.in</a>
            </p>
            <p className="mt-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-brand-secondary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <a href="https://www.instagram.com/visual_time_led" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">@visual_time_led</a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Visual Time. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-brand-text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
