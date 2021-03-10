import path from "path";
import { defineConfig } from "vite";

import WindiCSS from "vite-plugin-windicss";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    ...WindiCSS({
      scan: {
        fileExtensions: ["hbs", "html"],
      },
    }),
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/partials"),
    }),
  ],
});
