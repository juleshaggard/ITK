# In The Kitchen — Astro recreation

A faithful, responsive Astro recreation of the supplied In The Kitchen Webflow homepage. The source fonts, logos, and founder portrait are stored locally; the finished site does not hotlink production assets.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Push the project to a GitHub repository, enable **Settings → Pages → Source: GitHub Actions**, and push to `main`. The workflow uses the Pages-provided origin and base path, so both project pages and user/organization pages are supported.

The call-to-action links point to the original site's contact page because only the supplied homepage was part of the recreation scope.
