import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 重要：确保在GitHub Pages上正确加载资源
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
