import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://smartpro.solutions/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ' '),
      },
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  plugins: [vue()]
})
