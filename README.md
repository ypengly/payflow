# PayFlow

A fictional FinTech payments platform built as a portfolio project. Real Next.js
App Router project — real routes, real API endpoints, TypeScript, Tailwind CSS —
running entirely on sandbox/demo data. No real payment processing, no real
credentials, no real personal data anywhere in the codebase.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom design-token theme (light/dark via CSS variables)
- **Recharts** for charts
- **lucide-react** for icons
- Hand-rolled UI primitives in `components/ui` (Button, Card, Badge, Table, Modal,
  Toast, Skeleton, EmptyState, Input) — written in the spirit of shadcn/ui so you
  can swap in real shadcn components later with `npx shadcn@latest add <component>`
  once you have network access.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

- `/` — marketing landing page
- `/dashboard` — the authenticated app (Overview, Payments, Transactions,
  Customers, Analytics, Developers, API Keys, Webhooks, Audit Logs, Team,
  Settings, Billing)

## Project structure

```
app/
  page.tsx                 landing page
  layout.tsx                root layout + providers
  api/                      real route handlers (transactions, customers, webhooks)
  dashboard/
    layout.tsx              sidebar shell
    page.tsx                overview
    transactions/           list + [id] detail + refund action
    customers/               list + [id] detail
    payments/ analytics/ developers/ api-keys/ webhooks/
    audit-logs/ team/ settings/ billing/
components/
  marketing/                landing page sections
  dashboard/                sidebar, topbar, stat card, charts
  ui/                       shared design-system primitives
  theme-provider.tsx / theme-toggle.tsx
lib/
  data.ts                   sandbox/demo data + accessors
  utils.ts                  cn() className helper
types/
  index.ts                  shared TypeScript types
```

## Notes on "sandbox mode"

- All data in `lib/data.ts` is fictional.
- The refund button (`/dashboard/transactions/[id]`) and webhook retry button
  call real API routes, but those routes only simulate a status change in
  memory — nothing is persisted and no money moves.
- There is no database and no authentication wired up. If you want to make
  this a real product, natural next steps are: add a database (e.g. Postgres
  via Prisma or Drizzle), add auth (e.g. NextAuth or Clerk), and swap the
  sandbox payment logic for a real processor's API (e.g. Stripe) in test mode.

## Customizing the theme

Colors live as CSS variables in `app/globals.css` (`:root` for light,
`.dark` for dark) and are mapped to Tailwind utilities in
`tailwind.config.ts` (`bg-accent`, `text-muted`, `border-border`, etc.).
Change the variable values to re-theme the whole app.
