# Hustle

Hustle Hack repository with Vercel Web Analytics integration.

## Features

- **Next.js 15**: Built with the latest Next.js version using the App Router
- **TypeScript**: Full TypeScript support for type safety
- **Vercel Web Analytics**: Integrated analytics to track visitors and page views
- **Modern Stack**: React 19, TypeScript 5, and latest tooling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm, npm, yarn, or bun package manager

### Installation

1. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

2. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
# or
bun build
```

### Linting

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
# or
bun lint
```

## Vercel Web Analytics

This project has Vercel Web Analytics pre-configured using the `@vercel/analytics` package. The `Analytics` component is integrated in the root layout (`app/layout.tsx`).

### How it Works

The Analytics component automatically:
- Tracks page views
- Monitors web vitals
- Records user interactions
- Supports route changes in Next.js App Router

### Enabling Analytics on Vercel

To see analytics data after deployment:

1. Deploy your app to Vercel
2. Go to your [Vercel dashboard](https://vercel.com/dashboard)
3. Select your project
4. Click the **Analytics** tab
5. Click **Enable** to activate Web Analytics

Once enabled, you'll be able to view:
- Real-time visitor data
- Page view statistics
- Web vitals metrics
- Traffic sources and more

### Local Development

When running locally, analytics events are logged to the console in development mode. You'll see Fetch/XHR requests to `/_vercel/insights/view` in your browser's Network tab when visiting pages.

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new):

```bash
# Install Vercel CLI (if not already installed)
pnpm add -g vercel

# Deploy
vercel deploy
```

Or connect your Git repository to Vercel for automatic deployments on every push to main.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Analytics Package](https://www.npmjs.com/package/@vercel/analytics)

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout with Analytics component
│   └── page.tsx        # Home page
├── public/             # Static assets
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## License

MIT
