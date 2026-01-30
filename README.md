# SDA Taman Harapan Church Website

**Tagline**: "Menanti Kedatangan-Nya, Melayani Sesama" (Indonesian) / "Awaiting His Coming, Serving Others" (English)

## About

Official website for SDA Taman Harapan Church - A modern, bilingual (Indonesian & English) church website built with Next.js 14.

## Features

- ✅ **Bilingual Support** (Indonesian/English) with seamless language switching
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean, professional design inspired by modern church websites
- ✅ **Sermon Archive** - Browse and watch sermon recordings
- ✅ **Events Calendar** - Stay updated with upcoming church events
- ✅ **Ministry Information** - Learn about our various ministries
- ✅ **Sabbath School Resources** - Access study materials and class information
- ✅ **Online Giving** - Secure donation platform (integration ready)
- ✅ **Contact Forms** - Easy communication with the church
- ✅ **Service Times & Location** - Find us and plan your visit
- ✅ **SEO Optimized** - Proper meta tags for search engines
- ✅ **Accessibility** - WCAG 2.1 AA compliant
- ✅ **Smooth Animations** - Enhanced user experience with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The default language is Indonesian. To view in English, navigate to [http://localhost:3000/en](http://localhost:3000/en).

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## Project Structure

```
tamanharapan/
├── app/
│   └── [locale]/              # Internationalized pages
│       ├── layout.tsx         # Root layout with Header/Footer
│       ├── page.tsx           # Home page
│       ├── about/             # About page
│       ├── sermons/           # Sermons archive
│       ├── events/            # Events calendar
│       ├── ministries/        # Ministries information
│       ├── sabbath-school/    # Sabbath School resources
│       ├── contact/           # Contact page
│       └── give/              # Online giving page
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   ├── sections/              # Home page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ServiceTimes.tsx
│   │   ├── Sermons.tsx
│   │   ├── Events.tsx
│   │   └── Contact.tsx
│   └── ui/                    # Reusable UI components
│       ├── Button.tsx
│       └── Card.tsx
├── messages/                  # Translation files
│   ├── en.json               # English translations
│   └── id.json               # Indonesian translations
├── i18n/                     # Internationalization config
├── styles/
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── middleware.ts             # i18n middleware
├── i18n.ts                   # i18n configuration
├── tailwind.config.ts        # Tailwind CSS config
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript config
```

## Internationalization (i18n)

The website supports two languages:
- **Indonesian (id)** - Default language
- **English (en)**

### Adding Translations

1. Open the translation files in the `messages/` directory:
   - `messages/id.json` for Indonesian
   - `messages/en.json` for English

2. Add or modify translations following the existing structure

3. Use in components:

```tsx
import { useTranslations } from 'next-intl';

const t = useTranslations('nav');
return <p>{t('newItem')}</p>;
```

## Customization

### Updating Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Adding Content

Content is currently hardcoded in components with placeholder data. To update:

1. **Service Times**: Edit `/components/sections/ServiceTimes.tsx`
2. **About Information**: Edit `/app/[locale]/about/page.tsx`
3. **Sermons**: Edit `/app/[locale]/sermons/page.tsx`
4. **Events**: Edit `/app/[locale]/events/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

## License

MIT License - Feel free to use this as a template for your church website.

---

Built with ❤️ for SDA Taman Harapan Church

**Part of the Seventh-day Adventist Church**
