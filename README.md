# sojutech.com

Static site for Sojutech, LLC. Plain HTML/CSS/JS, no build step. Deployed on GitHub Pages behind Cloudflare.

## Local preview

Pages are flat files served at extensionless URLs (agencies.html answers at /agencies). GitHub Pages resolves that natively in production; locally you need a server that does the same:

```
npx serve
```

Run it from this directory (it reads serve.json for clean URLs), then open http://localhost:3000.

Opening index.html directly (file://), VSCode Live Server, and python3 -m http.server do NOT resolve extensionless URLs; interior links 404 under those.

## Structure

- One .html file per page at the repo root; audits lives at /audits
- assets/style.css: the whole design system, dark/light via html[data-theme]
- assets/site.js: theme toggle, mobile nav, footer year, contact form tracking
- robots.txt, sitemap.xml, llms.txt: keep in sync when pages are added or renamed
- .nojekyll: GitHub Pages serves files exactly as committed

House style: no em dashes or non-ASCII characters anywhere, straight quotes only.
