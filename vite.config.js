import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        renault_moments: resolve(__dirname, 'renault-moments.html'),
        datacity_paris_for_you: resolve(__dirname, 'datacity-paris-for-you.html')
      }
    }
  }
});
