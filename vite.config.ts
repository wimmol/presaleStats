import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dns from 'dns';

// localhost part
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets/*': path.resolve(__dirname, './src/assets/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@navigation': path.resolve(__dirname, './src/navigation'),
      '@navigation/*': path.resolve(__dirname, './src/navigation/*'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@pages/*': path.resolve(__dirname, './src/pages/*'),
      '@store': path.resolve(__dirname, './src/store'),
      '@store/*': path.resolve(__dirname, './src/store/*'),
      '@storeConfig': path.resolve(__dirname, './src/storeConfig'),
      '@storeConfig/*': path.resolve(__dirname, './src/storeConfig/*'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@constants/*': path.resolve(__dirname, './src/constants/*'),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  base: './',
});
