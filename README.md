# Bugslayer Login Page

A modern, responsive login application built with Next.js, React, and TypeScript. Features secure authentication flows with support for login, registration, and password recovery.

## Features

✅ Responsive design (mobile & desktop)
✅ Login, Registration, and Password Recovery flows
✅ Password visibility toggle
✅ OAuth integration ready (Google & Apple)
✅ Strong TypeScript types
✅ Accessibility compliant
✅ ESLint configuration

## Tech Stack

- **Framework**: Next.js 15.2.6
- **Language**: TypeScript 5
- **UI Components**: Radix UI + Custom components
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main login page
│   └── globals.css         # Global styles
├── components/
│   └── auth/
│       ├── SidebarBanner.tsx      # Left sidebar
│       ├── MobileHeader.tsx       # Mobile header
│       ├── FormHeader.tsx         # Form title section
│       ├── PasswordInput.tsx      # Reusable password input
│       └── OAuthButtons.tsx       # OAuth provider buttons
├── lib/
│   ├── constants.ts        # Brand, form messages, colors
│   └── types.ts            # TypeScript type definitions
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

### Build & Deploy

```bash
# Build production bundle
pnpm build

# Start production server
pnpm start
```

## Development

### Linting

```bash
# Run ESLint
pnpm lint
```

### Code Style

- TypeScript strict mode enabled
- ESLint configured for Next.js best practices
- Consistent naming conventions

## Features Overview

### 1. **Login View**
- Email and password inputs
- "Remember me" checkbox
- "Forgot password" link
- OAuth sign-in options

### 2. **Registration View**
- Full name input
- Email input
- Password with confirmation
- Password strength indicators (coming soon)

### 3. **Password Recovery**
- Email verification flow
- Reset link submission

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- High contrast colors

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
CMD ["pnpm", "start"]
```

## License

MIT

## Support

For issues or questions, please open a GitHub issue.

---

**Deployed at**: [https://v0-login-page-kappa-virid.vercel.app](https://v0-login-page-kappa-virid.vercel.app)
