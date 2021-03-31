import path from "path";
import { defineConfig } from "vite";

import WindiCSS from "vite-plugin-windicss";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    WindiCSS({
      scan: { fileExtensions: ["html", "css", "hbs"] },
    }),
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/partials"),
    }),
  ],
});
