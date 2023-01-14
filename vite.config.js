import path from "node:path";
import { defineConfig } from "vite";
import VitePluginFonts from "vite-plugin-fonts";
import handlebars from "vite-plugin-handlebars";
import WindiCSS from "vite-plugin-windicss";

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
