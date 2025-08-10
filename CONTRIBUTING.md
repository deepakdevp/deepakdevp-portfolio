# Contributing to Deepak Dev Portfolio

Thank you for your interest in contributing to this portfolio project! This guide will help you get started with the development workflow and coding standards.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/deepakdevp/deepakdevp-portfolio.git
   cd deepakdevp-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development Workflow

### Code Quality Tools

This project uses several tools to maintain code quality:

- **Biome** - Fast linting and formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks

### Pre-commit Hooks

When you commit changes, the following checks run automatically:

1. **Format** - Biome formats all changed files
2. **Lint** - Biome lints JavaScript/TypeScript files
3. **Type Check** - TypeScript compiler validates types

### Available Scripts

```bash
# Development
pnpm dev                # Start development server
pnpm build              # Build for production
pnpm start              # Start production server

# Code Quality
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix linting issues
pnpm format             # Format code with Biome
pnpm format:check       # Check formatting
pnpm typecheck          # Run TypeScript checks
```

## 📝 Coding Standards

### General Guidelines

- Write TypeScript for all new files
- Use functional components with hooks
- Follow the existing code structure and patterns
- Maintain consistency with Once UI design system
- Write descriptive commit messages

### File Structure

```
src/
├── app/                    # Next.js pages (App Router)
├── components/             # Reusable React components
│   ├── ComponentName.tsx
│   └── ComponentName.module.scss
├── resources/              # Configuration and content
│   ├── content.js         # Personal info and content
│   └── once-ui.config.js  # UI configuration
└── utils/                  # Utility functions
```

### Component Guidelines

1. **Use Once UI components** over native HTML elements
2. **Co-locate styles** - Keep `.module.scss` files next to components
3. **Export from index** - Add exports to `src/components/index.ts`
4. **Props interfaces** - Define TypeScript interfaces for component props

#### Example Component Structure

```tsx
import React from 'react';
import { Flex, Text, Heading } from '@once-ui-system/core';
import styles from './ComponentName.module.scss';

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const ComponentName: React.FC<ComponentProps> = ({ title, children }) => {
  return (
    <Flex className={styles.container}>
      <Heading variant="display-strong-m">{title}</Heading>
      {children && <Text>{children}</Text>}
    </Flex>
  );
};
```

### Styling Guidelines

1. **Use SCSS modules** for component-specific styles
2. **Reference Once UI tokens** - Use CSS variables like `var(--neutral-alpha-weak)`
3. **Follow responsive patterns** - Use `mobileDirection="column"` for mobile layouts
4. **Maintain theme consistency** - Use theme-aware colors and spacing

### Content Management

#### Personal Information

Update `src/resources/content.js` to modify:

- Personal details (`person` object)
- Work experience (`about.work.experiences`)
- Technical skills (`about.technical.skills`)
- Contact information (`contact` object)

#### UI Configuration

Update `src/resources/once-ui.config.js` to change:

- Theme colors and styling (`style` object)
- Navigation routes (`routes` object)
- Visual effects (`effects` object)
- Typography (`fonts` object)

#### Adding Content

**Blog Posts:**

1. Create `.mdx` file in `src/app/blog/posts/`
2. Add frontmatter with metadata
3. Use Once UI components in content

**Projects:**

1. Create `.mdx` file in `src/app/work/projects/`
2. Add project images to `public/images/projects/`
3. Update project metadata

## 🔧 Configuration Files

### EditorConfig

The `.editorconfig` file ensures consistent formatting across editors:

- 2-space indentation
- UTF-8 encoding
- LF line endings
- 100-character line length
- Trim trailing whitespace

### Biome Configuration

`biome.json` configures linting and formatting:

- Double quotes for strings
- 2-space indentation
- 100-character line width
- Modern JavaScript/TypeScript rules

### TypeScript Configuration

`tsconfig.json` includes:

- Strict type checking
- Path mapping (`@/*` for `src/*`)
- Modern ES features
- Next.js optimizations

## 🚀 Deployment

### Build Process

1. **Type Check** - Ensure no TypeScript errors
2. **Lint** - Fix any linting issues
3. **Build** - Generate production build
4. **Test** - Verify build works locally

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

### Environment Variables

Required for full functionality:

- `NEXT_PUBLIC_BASE_URL` - Site base URL for SEO
- `PASSWORD` - Route protection password (optional)

## 🐛 Issue Reporting

When reporting issues:

1. **Search existing issues** first
2. **Use issue templates** if available
3. **Provide detailed reproduction steps**
4. **Include environment information**
5. **Add screenshots** for UI issues

## 📋 Pull Request Process

1. **Fork the repository** and create a feature branch
2. **Make your changes** following the coding standards
3. **Test your changes** locally
4. **Commit with descriptive messages**
5. **Submit pull request** with detailed description

### Commit Message Guidelines

This project follows the **Conventional Commits** specification for consistent, semantic commit messages.

#### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types

- **feat** - A new feature for the user
- **fix** - A bug fix for the user
- **docs** - Documentation changes
- **style** - Code style changes (formatting, missing semi colons, etc)
- **refactor** - Code change that neither fixes a bug nor adds a feature
- **perf** - Performance improvements
- **test** - Adding missing tests or correcting existing tests
- **build** - Changes affecting build system or external dependencies
- **ci** - Changes to CI configuration files and scripts
- **chore** - Other changes that don't modify src or test files
- **revert** - Reverts a previous commit

#### Rules

- Use lowercase for type and scope
- Keep header under 72 characters
- Use imperative mood in description ("add" not "added")
- Don't end description with a period
- Include body for complex changes
- Reference issues in footer

#### Examples

```bash
# Feature
feat(components): add dark mode toggle component

# Bug fix
fix(auth): resolve login redirect issue

# Documentation
docs: update installation instructions in README

# Breaking change
feat!: migrate to Next.js 15 App Router

BREAKING CHANGE: Pages directory is no longer supported
```

#### Scopes (Optional)

Common scopes for this project:
- `components` - UI components
- `pages` - Page-level changes
- `auth` - Authentication related
- `api` - API routes
- `config` - Configuration files
- `styles` - Styling changes
- `content` - Content updates

### PR Checklist

- [ ] Code follows existing patterns and conventions
- [ ] TypeScript types are properly defined
- [ ] Components use Once UI design system
- [ ] Styles are responsive and theme-aware
- [ ] Content updates are in configuration files
- [ ] Commit messages follow conventional format
- [ ] Pre-commit hooks pass (format, lint, typecheck)
- [ ] Build succeeds without errors
- [ ] Changes are tested locally

## 💡 Best Practices

### Performance

- Use Next.js `Image` component for images
- Implement proper loading states
- Optimize bundle size with dynamic imports
- Use Server Components where appropriate

### Accessibility

- Use semantic HTML with appropriate `as` props
- Include descriptive alt text for images
- Maintain proper heading hierarchy
- Ensure keyboard navigation works
- Test with screen readers

### SEO

- Update meta tags for new pages
- Use structured data where appropriate
- Implement proper Open Graph images
- Maintain sitemap and robots.txt

### Security

- Validate user inputs
- Use environment variables for sensitive data
- Implement proper authentication flows
- Avoid exposing secrets in client code

## 🆘 Getting Help

- **Documentation** - Check `CLAUDE.md` and `.cursorrules`
- **Issues** - Create an issue for bugs or questions
- **Discussions** - Use GitHub discussions for general questions
- **Code Review** - Tag maintainers for review feedback

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Once UI Documentation](https://once-ui.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Biome Documentation](https://biomejs.dev)

Thank you for contributing! 🎉