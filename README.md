# Where's Maldives Magazine

A premium, subscription-based digital travel magazine focused exclusively on the Maldives. Built with React, Vite, and Tailwind CSS.

## 🌴 About

Where's Maldives is a design-first web application that evokes serenity, refinement, and emotional escape. Through azure blues, luminous whites, and tidal gradients, we provide an unhurried, curated user experience that showcases the beauty and culture of the Maldives.

## ✨ Features

- **Premium Design System**: Custom Tailwind configuration with Maldives-inspired color palette
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Subtle fade-ins, scale effects, and transitions for a refined experience
- **Hero Carousel**: Full-screen image carousel with elegant overlays
- **Content Grid**: Masonry-style article cards with hover effects
- **Subscription Modal**: Beautiful pricing plans modal with multiple tiers
- **Article Reader**: Long-form content pages with optimized typography
- **Authentication Pages**: Clean login and signup interfaces
- **Accessible**: Built following WCAG 2.1 AA standards

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mv-magazine
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (ArticleCard, SubscriptionModal)
│   ├── home/            # Home page specific components (Hero, ContentGrid)
│   └── layout/          # Layout components (Header, Footer, Layout)
├── pages/               # Page components (Home, About, Article, etc.)
├── hooks/               # Custom React hooks
├── context/             # React Context providers
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind directives
```

## 🎨 Design System

### Color Palette

- **Primary (Azure Blue)**: `#00A8E8` - Ocean horizons
- **Secondary (Cool Gray)**: `#F3F4F6` - Backgrounds
- **Accent (Tidal Green)**: `#2E8B57` - Sustainability highlights
- **Premium (Refined Gold)**: `#D4AF37` - Premium badges

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Base Size**: 1rem (16px) with 1.75 line-height

### Key Components

- Fixed header with search and user actions
- Full-screen hero carousel with auto-rotation
- Article cards with 4:3 aspect ratio images
- Subscription modal with two pricing tiers
- Responsive footer with social links

## 🌐 Pages

- **Home** (`/`) - Hero carousel + content grid + CTA
- **About** (`/about`) - Magazine mission and values
- **Article** (`/article/:slug`) - Long-form article reader
- **Magazine** (`/magazine`) - Magazine collection (placeholder)
- **Blog** (`/blog`) - Blog posts (placeholder)
- **Itineraries** (`/itineraries`) - Travel itineraries (placeholder)
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration

## 🔧 Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Heroicons** - Beautiful icons

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Color contrast meets WCAG 2.1 AA standards

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Tree-shaking for smaller bundle sizes
- Asset optimization

### Deploy to Vercel/Netlify

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📝 Future Enhancements

- [ ] Content Management System integration
- [ ] User authentication with Firebase/Auth0
- [ ] Search functionality with Algolia
- [ ] Newsletter subscription
- [ ] Social sharing features
- [ ] Dark mode support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Analytics integration
- [ ] SEO optimization

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for travelers who love the Maldives
