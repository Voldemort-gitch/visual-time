import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';
import { Resend } from 'resend';
import { InquiryAlertEmail } from '@/components/emails/InquiryAlertEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  eventType: z.string().min(1),
  eventDate: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // 1. Save to Supabase
    if (supabase) {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: validatedData.fullName,
            email: validatedData.email,
            phone_number: validatedData.phoneNumber,
            event_type: validatedData.eventType,
            event_date: validatedData.eventDate || null,
            message: validatedData.message,
          }
        ]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
      }
    }

    // 2. Clear out the Email Notification
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Visual Time <onboarding@resend.dev>',
          to: ['enquiry@visualtime.in'],
          subject: `New Inquiry: ${validatedData.fullName} - ${validatedData.eventType}`,
          react: InquiryAlertEmail({
            fullName: validatedData.fullName,
            email: validatedData.email,
            phoneNumber: validatedData.phoneNumber,
            eventType: validatedData.eventType,
            eventDate: validatedData.eventDate,
            message: validatedData.message,
          }),
        });
      }
    } catch (emailError) {
      // We log but don't fail the primary request so the user stays on the success screen
      console.error('Email notification error:', emailError);
    }

    return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
