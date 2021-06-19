import path from "path";
import { defineConfig } from "vite";

import WindiCSS from "vite-plugin-windicss";
import VitePluginFonts from "vite-plugin-fonts";
import handlebars from "vite-plugin-handlebars";
import customIndex from "vite-plugin-custom-index";

export default defineConfig({
  plugins: [
    customIndex({
      index: "index.hbs",
      treatAsHtml: ["hbs"],
    }),
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
