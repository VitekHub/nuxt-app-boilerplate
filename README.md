# Nuxt App Boilerplate

A clean Nuxt.js boilerplate with essential tools and configurations.

## Features

- ⚡ **Nuxt 3** - The latest version of Nuxt
- 🎨 **Nuxt UI** - Beautiful, accessible components
- 🌍 **i18n** - Internationalization support
- 📦 **Pinia** - State management
- 🎯 **TypeScript** - Type safety
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🎪 **Tailwind CSS** - Utility-first CSS framework

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint and fix code
- `npm run format` - Format code with Prettier

## Project Structure

```
├── assets/          # Uncompiled assets
├── components/      # Vue components
├── layouts/         # Application layouts
├── pages/           # Application pages/routes
├── public/          # Static files
├── server/          # Server-side code
└── types/           # TypeScript type definitions
```

## Customization

This boilerplate is ready to be customized for your specific needs. Feel free to:

- Replace `/pages/index.vue` with your own home page content
- Create new pages in `/pages`
- Customize the default layout in `/layouts/default.vue` (currently a simple single-column layout)
- Add more components in `/components`
- Configure additional modules in `nuxt.config.ts`
- Customize styling in `/assets/css/main.css`
- Update the project name in `package.json` to match your application