# Vercel Deployment Guide

## 1. Push code to GitHub
Push this entire project to a GitHub repository.

## 2. Import to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Framework Preset: **Next.js**

## 3. Set Environment Variables
In the Vercel project dashboard, go to **Settings → Environment Variables** and add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `klr1np53` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-06-15` |

**Optional (for preview/draft mode):**
| `SANITY_API_READ_TOKEN` | your-read-only-token |

## 4. Deploy
Click **Deploy**. Vercel will build and deploy automatically.

## 5. Add Custom Domain (optional)
- In Vercel dashboard, go to **Settings → Domains**
- Add `mcbrexlifesciences.com` and follow DNS instructions

## 6. After First Deploy
- Visit your deployed URL
- If dynamic pages show empty content, add data in your Sanity Studio
- The site will auto-revalidate every 60 seconds (ISR)
- For immediate updates, trigger a redeploy in Vercel

## Important Notes
- **Do NOT commit `.env.local`** to git. It contains secrets.
- Use **Vercel Environment Variables** for production values.
- The `SANITY_API_READ_TOKEN` is only needed if you want preview/draft mode.

## Sanity Studio URL
Your Sanity Studio is at: `https://klr1np53.sanity.studio/`
