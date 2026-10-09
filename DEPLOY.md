# Deploying 3D-CUSTOM on Netlify

The site is set up for Netlify: `netlify.toml` holds the build settings, and the
three forms (Home, Contact, Contact for Offer) are handled by Netlify Forms.

## First deploy

1. Push this project to a GitHub repository.
2. In Netlify: **Add new project → Import an existing project → GitHub**, pick the repo.
   Build command and publish folder are read from `netlify.toml`
   (`npm run build`, `dist`).
3. In the project: **Forms → Enable form detection**, then trigger a new deploy
   (**Deploys → Trigger deploy**). Netlify only finds the forms on a deploy made
   after detection is enabled.
4. **Forms → Submission notifications → Add notification → Email notification**
   → your address (e.g. Design@3d-custom.com), for "Any form".
5. Send a test message from each form on the live site and check that it appears
   under **Forms** and arrives by email.

## Custom domain

**Domain management → Add a domain** → `3d-custom.com`, then follow Netlify's DNS
instructions at your domain registrar. HTTPS is issued automatically.

## How the forms work

- The React forms post to `/__forms.html` (in `public/`). That file contains hidden
  copies of the three forms so Netlify knows their fields.
- **If you add, remove or rename a form field, change it in `public/__forms.html` too.**
- Limit: 8 MB per submission, files included. The site warns the visitor before
  sending a larger file.
- Spam: a hidden `bot-field` honeypot is included; Netlify also filters spam.
- Forms only send on the live Netlify site. In local development (`npm run dev`)
  a submit shows the error message, which is expected.

## Temporary redirects

`src/App.jsx` → `temporaryRedirects` forwards links to pages that don't exist yet
(service detail pages, the shop product page, terms). When a real page is built,
replace its line with a normal `<Route>`.
