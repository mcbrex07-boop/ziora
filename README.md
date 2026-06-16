# McBrex Lifesciences - Next.js Website

Converted from static HTML to Next.js 14 App Router.

## Project Structure

```
mcbrex-nextjs/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, CSS, meta)
│   ├── page.tsx                # Home page (/)
│   ├── about/page.tsx          # /about
│   ├── products/               # /products + 584 product pages
│   │   ├── page.tsx
│   │   └── dolbrex-p/page.tsx  # /products/dolbrex-p
│   ├── molecules/              # /molecules + 449 molecule pages
│   ├── divisions/              # /divisions + 6 division pages
│   ├── categories/             # /categories + 17 category pages
│   ├── therapeutics/           # /therapeutics + 37 therapeutic pages
│   └── [all other pages]/
├── public/
│   ├── assets/
│   │   ├── logo.jpg
│   │   └── divisions/          # Division images
│   ├── css/main.css            # All site styles
│   └── js/main.js              # Client-side interactivity
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## URL Changes (HTML → Next.js)

| Old (static) | New (Next.js) |
|---|---|
| `/index.html` | `/` |
| `/about.html` | `/about` |
| `/products/dolbrex-p.html` | `/products/dolbrex-p` |
| `/molecules/aceclofenac.html` | `/molecules/aceclofenac` |
| `/divisions/cardiwin-lifecare.html` | `/divisions/cardiwin-lifecare` |
| `/categories/antibiotic.html` | `/categories/antibiotic` |

## Total Pages
- Top-level pages: 23
- Product pages: 584
- Molecule pages: 449
- Division pages: 6
- Category pages: 17
- Therapeutic pages: 37
- **Total: 1,116 pages**

## Tech Notes

- All pages use `dangerouslySetInnerHTML` to render the original HTML content intact
- Metadata (`<title>`, `<meta description>`) extracted per page for proper SEO
- Global CSS/fonts served from `/public` via Next.js static file serving
- `main.js` loaded via Next.js `<Script strategy="afterInteractive">` for correct DOM-ready timing
- All internal links converted from `.html` to clean paths automatically
- All asset paths (`src=` attributes) fixed from relative `../assets/` to absolute `/assets/`
