# Neeraj Vishwakarma — Portfolio Site

A static, single-page portfolio built from your resume. No build step, no
dependencies to install — just HTML, CSS, and vanilla JS.

```
index.html   → page content
style.css    → design system (dashboard/observability-inspired theme)
script.js    → terminal boot animation, stat counters, mobile nav
```

## 1. Preview it locally
Just double-click `index.html`, or serve it:
```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## 2. Put it on GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 3. Turn on GitHub Pages
1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   (can take a minute or two the first time).

If you'd rather the site live at `https://<your-username>.github.io`
directly (no `/repo-name/` in the URL), name the repo
`<your-username>.github.io` instead.

## Customizing

- **Contact info**: phone numbers are intentionally left off the public
  page (this repo is public by default). To add them back, edit the
  `#contact` section in `index.html`.
- **Colors / fonts**: all in the `:root` block at the top of `style.css`.
- **Copy**: every section is plain HTML in `index.html` — no templating,
  so it's safe to hand-edit directly.
