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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  build: {
    commonjsOptions: { include: [] }, // Résout les conflits de modules CommonJS
  },
  optimizeDeps: {
    disabled: false, // Active l'optimisation des dépendances
    include: ['lru-cache'], // Force l'inclusion explicite de la bibliothèque problématique
  },
});
