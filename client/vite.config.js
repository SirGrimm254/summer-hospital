import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Frontend calls /api/... and Vite proxies to XAMPP
      '/api': {
        target: 'http://localhost/summer-hospital/server', // adjust if your path differs
        changeOrigin: true,
      },
    },
  },
})