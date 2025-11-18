import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajusta `base` solo si despliegas en un subdirectorio. Para desarrollo local usa '/'.
  base: '/met_avanzada/v2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});