# Maximum Detail - Car Detailing Website

A premium, modern website for Maximum Detail car detailing services in downtown Toronto. Built with Next.js, TypeScript, and Tailwind CSS featuring a sophisticated black and gold theme with smooth animations.

## 🚗 Features

- **Modern Design**: Sleek black and gold theme with premium aesthetics
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Optimized for search engines
- **Interactive UI**: Hover effects, smooth scrolling, and engaging interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header component
│   ├── Footer.tsx           # Footer component
│   ├── ImagePlaceholder.tsx # Placeholder image component
│   ├── index.ts             # Component exports
│   └── sections/
│       ├── HeroSection.tsx      # Hero landing section
│       ├── ServicesSection.tsx  # Services showcase
│       ├── AboutSection.tsx     # About company section
│       ├── GallerySection.tsx   # Work gallery section
│       └── ContactSection.tsx   # Contact form section
public/
└── images/                  # Image assets (to be added)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maximum_detail
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
The website uses a custom gold color palette defined in `tailwind.config.js`:
- Primary gold: `#f59e0b`
- Gold variants: 50-950 shades available

### Content Updates
- **Services**: Update the services array in `page.tsx`
- **Contact Info**: Modify contact details in the contact section
- **Images**: Add your car detailing photos to `public/images/`
- **Company Info**: Update business details throughout the site

### Adding Real Images
1. Add your car detailing photos to `public/images/`
2. Replace `ImagePlaceholder` components with actual `Image` components
3. Update the gallery section with real before/after photos

## 📱 Sections

1. **Hero**: Eye-catching landing section with call-to-action buttons
2. **Services**: Six service packages with pricing
3. **About**: Company information and statistics
4. **Gallery**: Showcase of work (currently using placeholders)
5. **Contact**: Contact form and business information
6. **Footer**: Additional links and company details

## 🎯 Key Features

### Navigation
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout
- Loading animations

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Component Architecture

The website is built with a modular component architecture:

- **Header**: Fixed navigation with scroll effects and mobile menu
- **Footer**: Comprehensive footer with contact info, links, and social media
- **Sections**: Each page section is a separate component for better maintainability
- **Reusable Components**: ImagePlaceholder for consistent image handling

### Adding New Sections

1. Create a new section component in `src/components/sections/`
2. Export it from `src/components/index.ts`
3. Import and use it in `src/app/page.tsx`
4. Add navigation link in `Header.tsx`
5. Style with Tailwind classes and add animations with Framer Motion

## 📸 Image Requirements

For best results, use high-quality images:
- **Hero Background**: 1920x1080px or larger
- **Gallery Images**: 800x600px minimum
- **Service Icons**: 64x64px SVG preferred
- **Format**: WebP or JPEG for photos, SVG for icons

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📞 Support

For questions or customization requests, contact the development team.

## 📄 License

This project is proprietary software for Maximum Detail car detailing services.

---

**Built with ❤️ for Maximum Detail**