import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // ✅ important for Vercel & Netlify
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // ✅ default, but good to be explicit
  },
})
