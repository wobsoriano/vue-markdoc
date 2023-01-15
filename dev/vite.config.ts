import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    vueJsx(),
  ],
});
