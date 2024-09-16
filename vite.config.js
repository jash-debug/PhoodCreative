import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    Pages({
      dirs: 'pages', // directory where your HTML files are located
      extensions: ['html'],
    }),
  ],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        breakfast: 'breakfast.html',
        lunch: 'lunch.html',
        supper: 'supper.html',
        // contact: 'contact.html',
        project: 'project.html',
        contact : 'contact.html'
      }
    }
  }
});