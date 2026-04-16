'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { z } from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please briefly describe your event vision"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      eventType: formData.get('eventType'),
      eventDate: formData.get('eventDate'),
      message: formData.get('message'),
    };

    const validation = formSchema.safeParse(data);

    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.issues.forEach(issue => {
        formattedErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to submit the form.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-32 pb-24 min-h-[90vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-brand-text-primary mb-6"
          >
            Let's <span className="text-brand-secondary italic">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-text-secondary leading-relaxed mb-12"
          >
            Fill out the form below or reach out directly to start planning your cinematic event experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-sm"
          >
            <div>
              <h4 className="text-brand-secondary font-medium mb-1">Email</h4>
              <p className="text-brand-text-primary">enquiry@visualtime.in</p>
            </div>
            <div>
              <h4 className="text-brand-secondary font-medium mb-1">Phone</h4>
              <p className="text-brand-text-primary">+91 98400 82127</p>
            </div>
            <div>
              <h4 className="text-brand-secondary font-medium mb-1">Office</h4>
              <p className="text-brand-text-primary">Kodambakkam, Chennai<br />Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          <div className="bg-brand-surface p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            <AnimatePresence>
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-brand-surface flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="font-serif text-3xl text-brand-text-primary mb-4">Inquiry Received</h3>
                  <p className="text-brand-text-secondary mb-8">Thank you for considering Visual Time. Our team will review your details and be in touch shortly.</p>
                  <Button variant="outline" onClick={() => setSuccess(false)}>Submit Another Event</Button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Full Name</label>
                  <input name="fullName" type="text" className={`w-full bg-black/50 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Email Address</label>
                  <input name="email" type="email" className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Phone Number</label>
                  <input name="phoneNumber" type="tel" className={`w-full bg-black/50 border ${errors.phoneNumber ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors`} />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Event Type</label>
                  <select name="eventType" className={`w-full bg-black/50 border ${errors.eventType ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors appearance-none`}>
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Private">Private Party</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Estimated Date (Optional)</label>
                  <input name="eventDate" type="date" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-text-secondary uppercase mb-2">Event Details / Message</label>
                <textarea name="message" rows={4} className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-secondary transition-colors resize-none`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
