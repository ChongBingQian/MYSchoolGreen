# MySchoolGreen (Cloudflare + Vite)

A React + TypeScript app deployed on Cloudflare with Wrangler.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs with Vite.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build production assets to `dist` |
| `npm run start` | Preview the production build locally |
| `npm run deploy` | Build and deploy to Cloudflare with Wrangler |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run format` | Format code with Prettier |

## Cloudflare Deployment

1. Authenticate Wrangler:

```bash
npx wrangler login
```

2. Deploy:

```bash
npm run deploy
```

`wrangler.toml` is configured to serve the SPA from `dist`.

## Notes

- Client data/auth currently use local browser storage through a Cloudflare-compatible client shim in `src/client/lib/cloudflare/`.
- Existing `src/server/` code is kept for reference, but deployment now targets Cloudflare static assets.
