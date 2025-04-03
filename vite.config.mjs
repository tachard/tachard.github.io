import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react({
    babel: {
      babelrc: true,
      configFile: true,
    },
  }), tsconfigPaths()],
  base: '/tachard.github.io/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  build: {
    commonjsOptions: {
        include: [/node_modules/],
    }
  },
  optimizeDeps: {
    include: ['lru-cache'], // Force l'inclusion explicite de la bibliothèque problématique
  },
});
