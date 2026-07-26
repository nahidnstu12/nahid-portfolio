# Resume

## Layout

| Path | Purpose |
| --- | --- |
| `resume/` | **Active** HTML sources (edit these) |
| `cv/` | **Active** PDFs built from those HTML files |
| `applications/` | One-off application packs (not general CVs) |
| `_archive/` | Stale / company-specific / superseded — delete after ~30 days if unused |
| `generate-pdf.js` | HTML → PDF via Puppeteer |

## Active sources

| HTML | PDF | Use for |
| --- | --- | --- |
| `resume/resume-fullstack-remote.html` | `cv/mazharul-islam-nahid-fullstack-developer.pdf` | Default fullstack / remote |
| `resume/resume-frontend-remote.html` | `cv/mazharul-islam-nahid-frontend-remote.pdf` | Frontend-heavy roles |
| `resume/resume-fullstack-laravel.html` | `cv/mazharul-islam-nahid-fullstack-laravel.pdf` | Laravel / PHP stack |
| `resume/resume-minhajul-islam.html` | `cv/minhajul-islam-fullstack-developer.pdf` | Minhajul (brother) |

## Applications

- `applications/gtaf-*` — Greentech Apps behavioral answer (HTML / TXT / PDF)

## Regenerate PDF

From `resume/`:

```bash
node generate-pdf.js resume/resume-fullstack-remote.html cv/mazharul-islam-nahid-fullstack-developer.pdf
node generate-pdf.js resume/resume-frontend-remote.html cv/mazharul-islam-nahid-frontend-remote.pdf
node generate-pdf.js resume/resume-fullstack-laravel.html cv/mazharul-islam-nahid-fullstack-laravel.pdf
node generate-pdf.js resume/resume-minhajul-islam.html cv/minhajul-islam-fullstack-developer.pdf
```

## Rules

1. Edit only files under `resume/` (or `applications/` for one-offs).
2. Every active PDF must have a matching active HTML.
3. Company-specific / superseded versions → `_archive/`, not `resume/` or `cv/`.
4. After ~30 days unused, delete from `_archive/`.
