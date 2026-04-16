import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-text-secondary border-t border-white/5 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-serif text-2xl tracking-widest text-brand-text-primary block mb-6">
            VISUAL<span className="text-brand-secondary">TIME</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Pioneering premium LED rental solutions and corporate event production in Chennai for over 26 years. From high-resolution video walls to seamless corporate management.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-brand-text-primary text-lg mb-6 tracking-wider">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">LED Screen Rental</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Corporate Events</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Product Launches</Link></li>
            <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Technical Production</Link></li>
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
          <h4 className="font-serif text-brand-text-primary text-lg mb-6 tracking-wider">Contact Us</h4>
          <address className="not-italic text-sm space-y-4">
            <p>Kodambakkam, Chennai</p>
            <p>Tamil Nadu, India</p>
            <p className="mt-4"><a href="mailto:enquiry@visualtime.in" className="hover:text-brand-secondary transition-colors">enquiry@visualtime.in</a></p>
            <p><a href="tel:+919840082127" className="hover:text-brand-secondary transition-colors">+91 98400 82127</a></p>
            <p className="mt-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
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
