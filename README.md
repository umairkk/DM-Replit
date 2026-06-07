# DM-Replit — Umair A. Marketing Portfolio

Personal landing page for **Umair A.**, Digital Marketing Specialist. Recreated from the Replit design with the same dark theme, hero, skills, portfolio sections, Calendly scheduling, testimonials, and contact form.

## Stack

- **Frontend**: React 19, Vite 7, Tailwind CSS 4, Framer Motion, shadcn/ui
- **Backend**: Express 5 API with PostgreSQL + Drizzle ORM (contact form)
- **Monorepo**: pnpm workspaces

## Quick start

```bash
pnpm install
pnpm run typecheck:libs
pnpm --filter @workspace/marketing-portfolio run dev
```

Open [http://localhost:5000](http://localhost:5000).

## Contact form (optional backend)

The contact form posts to `POST /api/contact`. To enable it locally:

1. Set `DATABASE_URL` to a PostgreSQL connection string.
2. Push the schema: `pnpm --filter @workspace/db run push`
3. Start the API server on port 3001: `PORT=3001 DATABASE_URL=... pnpm --filter @workspace/api-server run dev`

The Vite dev server proxies `/api` to `http://localhost:3001` by default.

## Project structure

| Package | Path | Description |
|---------|------|-------------|
| Marketing portfolio | `artifacts/marketing-portfolio` | Main landing page (`src/pages/Home.tsx`) |
| API server | `artifacts/api-server` | Express backend |
| API client | `lib/api-client-react` | Generated React Query hooks |
| Database | `lib/db` | Drizzle schema |

## Calendly

Update `CALENDLY_URL` in `artifacts/marketing-portfolio/src/pages/Home.tsx` with your scheduling link.
