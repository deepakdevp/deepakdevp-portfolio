# Deepak Dev Portfolio - Project Documentation

## Overview
This is a personal portfolio website for Deepak Dev Panwar, built with Next.js and the Once UI design system. The portfolio showcases work experience, projects, blog posts, and provides contact information.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Development tools
pnpm lint              # Run ESLint
pnpm lint:fix          # Fix linting issues
pnpm format            # Format code with Biome
pnpm format:check      # Check formatting
pnpm typecheck         # Run TypeScript checks
```

## 📁 Project Structure
```
deepakdevp-portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── api/               # API routes (auth, og generation)
│   │   ├── blog/              # Blog pages and posts
│   │   │   └── posts/         # MDX blog posts
│   │   ├── gallery/           # Photo gallery
│   │   ├── work/              # Work/projects section
│   │   │   └── projects/      # MDX project files
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── about/             # About page components
│   │   ├── blog/              # Blog components
│   │   ├── gallery/           # Gallery components
│   │   ├── work/              # Work/project components
│   │   ├── ContactMe.tsx      # Contact form component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Header.tsx         # Header component
│   │   └── ThemeToggle.tsx    # Theme switcher
│   ├── resources/             # Configuration and content
│   │   ├── content.js         # Main content configuration
│   │   ├── once-ui.config.js  # UI configuration
│   │   ├── custom.css         # Custom styles
│   │   └── icons.ts           # Icon definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets
│   ├── images/                # Images and media
│   │   ├── avatar.jpg         # Profile image
│   │   ├── gallery/           # Gallery images
│   │   ├── og/                # Open Graph images
│   │   └── projects/          # Project images
│   └── trademarks/            # Brand assets
├── biome.json                 # Biome configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15.3.1** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Sass 1.86.3** - Styling

### Design System
- **@once-ui-system/core 1.2.4** - Design system components
- **classnames 2.5.1** - CSS class management

### Content Management
- **MDX** - Content authoring with React components
- **@next/mdx 15.3.1** - Next.js MDX integration
- **next-mdx-remote 5.0.0** - Remote MDX rendering
- **gray-matter 4.0.3** - Frontmatter parsing

### Additional Features
- **react-icons 5.5.0** - Icon library
- **react-masonry-css 1.0.16** - Gallery layout
- **cookie 1.0.2** - Cookie handling

### Development Tools
- **Biome** - Linting and formatting
- **ESLint 9.25.0** - Code linting

## 📝 Content Management

### Personal Information
Edit `src/resources/content.js` to update:
- Personal details (name, role, email, location)
- Social media links
- Contact information
- Work experience
- Technical skills
- Education

### Configuration
Edit `src/resources/once-ui.config.js` to customize:
- Site routing and navigation
- Theme and styling options
- Typography (fonts)
- Visual effects (gradients, dots, grid)
- Protected routes
- Base URL for SEO

### Adding Blog Posts
1. Create new `.mdx` file in `src/app/blog/posts/`
2. Add frontmatter with metadata
3. Posts automatically appear on `/blog`

### Adding Projects
1. Create new `.mdx` file in `src/app/work/projects/`
2. Add project details and images
3. Projects automatically appear on `/work` and home page

### Image Management
- Profile image: `public/images/avatar.jpg`
- Project images: `public/images/projects/`
- Gallery images: `public/images/gallery/`
- OG images: `public/images/og/`

## 🎨 Styling

### Theme System
The project uses Once UI's theme system with:
- **Brand color**: Cyan
- **Accent color**: Red
- **Neutral color**: Gray
- **Theme**: System (auto dark/light)
- **Border style**: Playful
- **Surface**: Translucent

### Custom Styles
- Custom CSS in `src/resources/custom.css`
- Component-specific SCSS modules
- Theme tokens via CSS variables

### Responsive Design
- Mobile-first approach
- Breakpoints defined in `src/components/breakpoints.scss`
- Flexible layouts using Once UI components

## 🔐 Security Features

### Route Protection
- Password protection available for sensitive routes
- Configure in `once-ui.config.js` `protectedRoutes`
- Set password in environment variables

### Authentication API
- Basic auth endpoints in `src/app/api/`
- Cookie-based session management

## 📊 SEO & Meta

### Open Graph
- Dynamic OG image generation
- SEO-optimized meta tags
- Schema.org structured data

### Sitemap & Robots
- Automatic sitemap generation (`src/app/sitemap.ts`)
- Robots.txt configuration (`src/app/robots.ts`)

## 🚀 Deployment

### Build Commands
```bash
# Production build
pnpm build

# Export static site
pnpm export
```

### Environment Variables
Required for full functionality:
- `NEXT_PUBLIC_BASE_URL` - Site base URL
- `PASSWORD` - Route protection password
- Mailchimp integration variables (if used)

## 🛠️ Development Workflow

### Code Quality Tools
- **Biome** - Fast linting and formatting (replaces ESLint + Prettier)
- **TypeScript** - Type safety and better developer experience
- **Husky** - Git hooks for automated quality checks
- **lint-staged** - Run checks only on changed files
- **EditorConfig** - Consistent formatting across editors

### Pre-commit Hooks
Automatically runs on every commit:
1. **Format** - Biome formats all changed files
2. **Lint** - Biome lints JavaScript/TypeScript files 
3. **Type Check** - TypeScript compiler validates types

### File Organization
- Components are modular with co-located SCSS styles
- Content configuration separated in `resources/`
- Static assets organized by type in `public/`
- Git hooks configured in `.husky/`

## 📱 Features

### Core Pages
- **Home** (`/`) - Landing page with featured work
- **About** (`/about`) - Professional background and experience
- **Work** (`/work`) - Portfolio projects showcase
- **Blog** (`/blog`) - Technical writing and articles
- **Gallery** (`/gallery`) - Photo collection

### Interactive Elements
- Theme switcher (light/dark/system)
- Masonry gallery layout
- Contact form integration
- Newsletter subscription
- Mobile-responsive navigation

### Performance
- Static site generation
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS for critical styles

## 🎯 Key Configuration Points

### For Quick Customization
1. **Personal Info**: Update `person` object in `content.js`
2. **Styling**: Modify `style` object in `once-ui.config.js`
3. **Navigation**: Update `routes` object in `once-ui.config.js`
4. **Contact**: Configure `contact` object in `content.js`

### For Content Updates
1. **Work Experience**: Edit `about.work.experiences` in `content.js`
2. **Projects**: Add/edit MDX files in `src/app/work/projects/`
3. **Blog Posts**: Add/edit MDX files in `src/app/blog/posts/`
4. **Images**: Replace files in `public/images/`

This documentation provides a comprehensive guide for understanding and extending the portfolio. The codebase follows modern React/Next.js patterns and is built for easy customization and maintenance.