# GIVORO Marketing Site

This Next.js project powers the marketing website for **GIVORO**. It uses Tailwind CSS and pulls dynamic content from a Sanity CMS.

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Create a `.env.local` file with your mail server and Sanity credentials:
   ```env
   MAIL_HOST=smtp.example.com
   MAIL_PORT=587
   MAIL_USER=username
   MAIL_PASS=password
   MAIL_FROM=info@givoro.com
   SANITY_PROJECT_ID=yourProjectId
   SANITY_DATASET=production
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

Deployments are intended for Vercel.
