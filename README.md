# Minimal Front · Jekyll Three-Column Blog Template

Minimal Front is a content-first Jekyll theme that you can fork and deploy as-is. It ships with a left navigation rail, focused reading column, contextual tag/TOC sidebar, and progressive enhancements (clipboard share link, Utterances comments, TOC) that only load on post pages.

## Features

- Three-column responsive layout with sticky left nav and right rail
- Post-aware enhancements: clipboard share link, Utterances comments, auto TOC
- Tag-aware landing page with query-based filtering (`?tag=design`)
- Empty-state UX for posts and tags so fresh installs still look polished
- Config-driven UI labels (share button, nav text, tags CTA, copy feedback)
- Sample post outside `_posts/` to keep the template repo clean

## Quick Start (GitHub Pages)

1. **Fork** this repository.
2. (Optional) Rename it to `username.github.io` for user-site hosting.
3. **Update `_config.yml`**: title, description, author info, social handles, `utterances.repo`, UI labels.
4. Commit the changes and push to `main`.
5. Open **Settings → Pages**, pick `main` / `root`, and wait for the build to finish.

Your site is now live at `https://username.github.io` (or the custom domain you configure).

## Local Development

```bash
bundle install          # install dependencies
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview changes. Stop the server with `Ctrl+C`.

## Requirements

- Ruby 3.1+ (GitHub Pages currently uses Ruby 3.1)
- Bundler (`gem install bundler`)
- Node is optional but helpful for running formatters/lints

## Configuration Checklist (`_config.yml`)

- `title`, `description`, `url`, `baseurl`: Site metadata and canonical URLs.
- `author.*`, `github`, `linkedin`: About page + sidebar links.
- `utterances.repo`: Enables comments (`username/repo`).
- `paginate`, `paginate_path`: Controls index pagination size and path.
- `ui.*`: All on-screen labels (nav links, share button, empty states, copy feedback). Leaving entries blank falls back to sensible English defaults.

## Writing Posts

1. Copy `samples/sample-post.md` into `_posts/`.
2. Rename it to `YYYY-MM-DD-your-title.md`.
3. Update the front matter (`layout`, `title`, `date`, `tags`, `description`).
4. Write in Markdown. Headings become part of the TOC on post pages.

```markdown
---
layout: post
title: "How I plan sprints"
date: 2025-02-01
tags: [agile, planning]
description: "A simple rhythm for two-week sprints."
---

## Why a cadence matters

...
```

## Directory Overview

- `_layouts/` – Base templates (`default`, `post`)
- `_includes/` – Shared partials (nav, head, footer, comments, tag rail)
- `_posts/` – Your published posts
- `samples/` – Copy-ready post templates
- `assets/css/main.scss` – Primary theme styles
- `assets/js/` – TOC, share, and tag filter behaviors
- `index.html` – Feed with pagination and empty-state messaging
- `tags.html` – Tag explorer page
- `about.html` – Minimal about section with social/email links

## Comments (Utterances)

1. Create/confirm a public GitHub repo to store comment issues.
2. In `_config.yml`, set `utterances.repo: "username/repo"`.
3. Keep `issue_term` at `pathname` unless you need a different matching strategy.

The widget only loads on post layouts and stays hidden elsewhere.

## After You Fork

1. Delete or replace the dummy pagination posts under `_posts/` if you don’t need them.
2. Add `_site/` to `.gitignore` if you plan to commit from a non-Pages environment (Pages builds its own output).
3. Update `assets/css/main.scss` + `assets/js/*` as needed (no build step required, but you can wire in Sass/PostCSS if you want).
4. (Optional) Add a GitHub Actions workflow that runs:
   ```yaml
   - uses: actions/checkout@v4
   - uses: ruby/setup-ruby@v1
     with:
       ruby-version: '3.1'
       bundler-cache: true
   - run: bundle exec jekyll build
   ```
   This mirrors the Pages build and catches Liquid/Markdown issues before deploy.

## Production Checklist

- ✅ `_config.yml` metadata + UI labels filled out
- ✅ `_posts/` only contains the posts you actually want to publish
- ✅ `Gemfile`/`Gemfile.lock` committed so Pages uses the right dependencies
- ✅ `LICENSE` + `README` customized (optional but recommended)
- ✅ (Optional) Custom domain added under `Settings → Pages → Custom domain`

## License

Released under the MIT License. Feel free to fork, remix, and deploy. A link back is appreciated but not required.

