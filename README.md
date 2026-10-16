# astroom.dev

Personal site of Olle Ljung (astroom). Next.js 14 (app router) + Tailwind,
exported as static HTML and served from Cloudflare Workers as static assets.

All content lives in `content/profile.ts`; components under `components/`
only render it. There is no client-side JavaScript beyond the Next.js runtime.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
```

## Build

```bash
npm run build      # static export written to out/
```

## Deploy

The build output in `out/` is deployed to Cloudflare Workers as static assets
(see `wrangler.jsonc`):

```bash
npm run build
npx wrangler deploy
```
