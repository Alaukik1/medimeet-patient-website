import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    include: ['lucide-react'],
  },
  resolve: {
    alias: {
      // Add any aliases if needed
    }
  },
  server: {
    port: 5173,
    host: true
  }
});
