# Arch Linux Migration Guide 🐧

This guide explains how to set up the **Visual Time** development environment on an Arch Linux system.

## 1. System Requirements
First, ensure your Arch system is up to date and has the necessary dependencies.

```bash
sudo pacman -Syu
sudo pacman -S git nodejs npm
```

## 2. Clone the Repository
Clone your code from GitHub to your home directory or projects folder.

```bash
git clone https://github.com/Voldemort-gitch/visual-time
cd visual-time
```

## 3. Reinstall Dependencies
Reinstalling dependencies ensures they are compiled correctly for the Linux kernel.

```bash
npm install
```

## 4. Restore Environment Variables (CRITICAL)
Your `.env.local` file was NOT pushed to GitHub for security reasons. You must recreate it manually.

Create a file named `.env.local` in the root folder and paste your keys:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

# Email Notification System
RESEND_API_KEY=YOUR_RESEND_API_KEY
```

## 5. Running the Site Locally
```bash
npm run dev
```

## 6. Development Workflow
The workflow remains identical to Windows:
1. Make your changes (text, images, styles).
2. Save the files.
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of your change"
   git push origin main
   ```
4. Vercel will automatically detect the push and update `visualtime.in` instantly.

---
**Note**: If you use a high-DPI display, you might want to install `noto-fonts` or `ttf-inter` via pacman for the best typography rendering on Arch.
