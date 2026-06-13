# Krewe of Red Beans / Beanlandia — Website

The public website for **kreweofredbeans.org**. A static HTML/CSS/JS site (no build step).

## How publishing works

The site is hosted on **Netlify**, which **auto-deploys from this GitHub repo**
(`devin-gif/krewe-of-red-beans-site`, `main` branch).

**You do not upload anything manually.** Pushing to GitHub *is* how the site goes live.

### To make a change go live

1. Edit the files (e.g. `index.html`, `style.css`).
2. Commit and push to `main`:
   ```bash
   git add -A
   git commit -m "Describe the change"
   git push origin main
   ```
3. **Wait ~1–2 minutes** for Netlify to build and deploy.
4. **Hard-refresh** the live site to bypass your browser cache:
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

If you don't see the change, it's almost always one of two things:
- You refreshed before Netlify finished (give it another minute), or
- Browser cache — do a hard refresh.

## Previewing locally before publishing

To see changes on your own machine without touching the live site, serve the
folder and open it in a browser:

```bash
python3 -m http.server 8765
```

Then visit **http://localhost:8765**. Changes appear on refresh (no deploy needed).

## Project layout

| File / folder        | What it is                                              |
| -------------------- | ------------------------------------------------------- |
| `index.html`         | Homepage                                                |
| `style.css`          | Site-wide styles (brand colors defined in `:root` at top) |
| `members.html` / `members.css` | Members page                                  |
| `events.html`        | Events page                                             |
| `transparency.html`, `financial-reports.html` | Transparency pages           |
| `donate-*.html`      | Individual donation / fund pages                        |
| `images/`            | Photos and assets                                       |
| `script.js`          | Small bits of homepage interactivity (mobile nav, etc.) |

### Brand colors (defined at the top of `style.css`)

- `--red: #C0392B` · `--red-dark: #962d22` · `--gold: #D4A017`
- `--cream: #FAF6EF` · `--charcoal: #1E1E1E`

## Common edits

**Membership tracker banner** (the pinned red/gold progress bar under the nav).
To update the count, edit three spots in `index.html` (search for `member-tracker`):
1. The headline — `Help us grow from 1,116 to 2,000 members`
2. The numbers — `<strong>1,116</strong> of 2,000 members` and `884 to go`
3. The bar fill — `style="--target: 55.8%;"` (new count ÷ 2,000 × 100)

Also update the matching count in the impact bar (`1,116+`).
