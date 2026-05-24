// @ts-check
import { defineConfig } from 'astro/config';

// For GitHub Pages:
// - User/org site (repo named <username>.github.io): set site to "https://<username>.github.io" and leave base unset.
// - Project site (any other repo name): set site to "https://<username>.github.io" and base to "/<repo-name>".
// Fill these in once you've created the GitHub repository.
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  // base: '/REPO-NAME',
});
