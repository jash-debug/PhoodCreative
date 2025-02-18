import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    Pages({
      dirs: "pages", // directory where your HTML files are located
      extensions: ["html"],
    }),
  ],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        editorial: "editorial.html",
        drinks: "drinks.html",
        product: "product.html",
        // contact: 'contact.html',
        project: "project.html",
        contact: "contact.html",
      },
    },
  },
});
