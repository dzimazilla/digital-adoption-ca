# digital-adoption.ca

An open-source project publishing practical guides that help Canadian small businesses make better technology decisions.

Production site: https://digital-adoption.ca/

## What this project is

digital-adoption.ca publishes short, problem-first guides about practical software, workflow, customer follow-up, and security decisions.

- Root-level guide URLs
- Visible review dates
- Public reporting for outdated information

Contributions and corrections are welcome through GitHub.

## Local development

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

The site uses Astro and builds to static assets for Cloudflare Workers. Deployment settings live in `wrangler.jsonc`.

## Content structure

Guides live in `src/content/guides`. Categories remain available as guide metadata; guide URLs stay at the root, for example `/stop-copying-data-between-tools/`.

## Licence

Code and original site content are available under the MIT licence. Third-party trademarks remain the property of their respective owners.
