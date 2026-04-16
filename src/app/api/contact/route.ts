import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

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

    // If Supabase is configured, insert the record
    if (supabase) {
      const { error } = await supabase
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

      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
      }
    } else {
      // Mock mode for testing when Supabase isn't configured yet
      console.log('Mock Submission Data:', validatedData);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
