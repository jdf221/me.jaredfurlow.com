import path from "path";
import { defineConfig } from "vite";

import WindiCSS from "vite-plugin-windicss";
import VitePluginFonts from "vite-plugin-fonts";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    WindiCSS({
      scan: { dirs: ["."], fileExtensions: ["html", "css", "hbs"] },
    }),
    VitePluginFonts({
      google: {
        families: ["Roboto"],
      },
    }),
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/partials"),
    }),
  ],
});
