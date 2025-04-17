import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    AutoImport({
      resolvers: [IconsResolver()],
      dts: false,
    }),
    Icons({
      compiler: "svelte",
    }),
  ],
});
