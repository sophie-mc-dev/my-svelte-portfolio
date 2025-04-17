import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null // use 'index.html' if using SPA-style routing
    }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH || '',
    },
  },
  preprocess: vitePreprocess(),
};

export default config;