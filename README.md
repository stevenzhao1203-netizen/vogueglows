# VogueGlows

Bright, international fashion and lifestyle affiliate editorial for `vogueglows.com`.

## Content architecture

- Fashion: wardrobe edits, styling guidance, accessories, seasonal trends.
- Home Living: interiors, entertaining, everyday rituals, useful objects.
- Beauty: skincare, makeup, wellness and routine-led recommendations.
- The Edit: timely, commercial-intent product roundups and editor's picks.

## SEO focus

Start with commercial-intent phrases such as `best women's fashion essentials`, `women's lifestyle recommendations`, `best beauty products for glowing skin`, `elevated home decor ideas`, `fashion editor picks`, and `gift ideas for women`. Build each article around one primary phrase, a specific audience or need, original selection criteria, internal links to its category, and a clear affiliate disclosure.

## Local and deployment

```powershell
npm ci
npm run dev
npm run build
npm run deploy:cloudflare
```

Create a separate Cloudflare Pages project named `vogueglows`, publish the `out` folder, and connect both `vogueglows.com` and `www.vogueglows.com`. Redirect `www` to the apex domain.
