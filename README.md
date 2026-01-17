# Build Something Online - Landing Page

A modern, responsive landing page for the "Build Something Online" 28-day AI-first sprint.

## Features

- ✨ Modern, warm design with custom color palette
- 📱 Fully responsive layout
- 🎯 Interactive signup modal with blurred overlay
- 🗄️ Convex database integration for signup collection
- ⚡ Built with Vite + React + TypeScript
- 🎨 Tailwind CSS for styling
- 📋 Complete 28-day curriculum display

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Database**: Convex
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Build-Something-Online-Landing-Page
```

2. Install dependencies:
```bash
npm install
```

3. Initialize Convex (for database functionality):
```bash
npx convex dev
```
This will:
- Open browser for authentication
- Create/link to a Convex project
- Generate API files
- Create `.env.local` with your deployment URL

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── SignupModal.tsx # Signup form modal
│   │   ├── Curriculum.tsx  # 28-day curriculum
│   │   ├── Outcomes.tsx    # What you'll build
│   │   └── ...             # Other sections
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── convex/
│   ├── schema.ts           # Database schema
│   └── signups.ts          # Signup mutations
└── public/                 # Static assets
```

## Features Overview

### Signup Modal
- Beautiful modal with backdrop blur effect
- Form validation
- Success state animation
- Saves to Convex database
- Prevents duplicate email signups

### Sections
- Hero with CTAs
- What You'll Build (6 outcomes)
- What You'll Learn
- Who It's For
- How It Works (3-step process)
- Full 28-Day Curriculum
- Sprint Details
- FAQ
- Final CTA
- Footer

## Database Schema

The app uses Convex with the following schema:

```typescript
signups: {
  name: string,
  email: string,
  createdAt: number
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables:
   - `VITE_CONVEX_URL` - Your Convex deployment URL
4. Deploy!

### Convex Production Deployment

```bash
npx convex deploy
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run convex:dev` - Start Convex development
- `npm run convex:deploy` - Deploy Convex to production

## Color Palette

- **Warm White**: `#FAFAF8`
- **Beige**: `#F8F6F3` to `#DDD5C7`
- **Charcoal**: `#1A1A1A`
- **Warm Orange**: `#E77849` to `#C85E37`

## License

MIT

## Author

Built with ❤️ for the Build Something Online community
