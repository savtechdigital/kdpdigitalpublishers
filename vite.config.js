
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,     // or '0.0.0.0'
    port: 3000,     // or any port you want
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
