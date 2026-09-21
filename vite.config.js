import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proposition_2: resolve(__dirname, 'proposition_2.html')
      }
    }
  }
});
