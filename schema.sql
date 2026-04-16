-- 1. Create the table
CREATE TABLE public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    event_type TEXT NOT NULL,
    event_date DATE,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Set up Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows anyone to INSERT (since it's a public contact form)
CREATE POLICY "Allow public inserts" ON public.contact_submissions
    FOR INSERT
    WITH CHECK (true);

-- 4. Create a policy that allows only authenticated admins to SELECT/read the data
CREATE POLICY "Allow authenticated full access" ON public.contact_submissions
    FOR ALL
    USING (auth.role() = 'authenticated');
