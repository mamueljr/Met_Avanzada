import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProd = command === 'build';
  return {
    plugins: [react()],
    // En desarrollo usamos '/' para que sea fácil.
    // En producción (build) usamos la subcarpeta donde se va a alojar.
    base: isProd ? '/met_avanzada/maestria/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});