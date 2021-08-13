import { defineConfig } from "vite";
import vue2 from "vite-plugin-vue2";

export default defineConfig({
  root: "resources/skins.snapwikiskin.search",
  plugins: [vue2.createVuePlugin()],
  build: {
    outDir: "../dist",
    assetsDir: "",
    minify: false,
    emptyOutDir: true,
    target: "es2015",

    lib: {
      entry: "skins.snapwikiskin.search.js",
      formats: ["cjs"],
      name: "skins.snapwikiskin.search",
    },

    rollupOptions: {
      output: {
        entryFileNames: "skins.snapwikiskin.search.js",
        chunkFileNames: "skins.snapwikiskin.search.js",
        assetFileNames: "skins.snapwikiskin.search.js",
      },
      external: ["vue"],
    },
  },
});
