import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proposition_2: resolve(__dirname, 'proposition_2.html'),
        renault_moments: resolve(__dirname, 'renault-moments.html'),
        datacity_paris_for_you: resolve(__dirname, 'datacity-paris-for-you.html'),
        excibat: resolve(__dirname, 'excibat.html'),
        royal_canin: resolve(__dirname, 'royal-canin.html')
      }
    }
  }
});
