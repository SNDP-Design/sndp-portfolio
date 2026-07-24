import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'esnext',
    cssMinify: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        fatcacrs: resolve(__dirname, 'fatca-crs/index.html'),
        memberconnect: resolve(__dirname, 'member-connect/index.html'),
        clix: resolve(__dirname, 'clix/index.html'),
      }
    }
  }
});

