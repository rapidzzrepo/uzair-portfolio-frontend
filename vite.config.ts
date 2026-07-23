import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    proxy: {
      '/ask': 'https://jawad.nexteksol.com',
      '/health': 'https://jawad.nexteksol.com',
    },
  },
})
