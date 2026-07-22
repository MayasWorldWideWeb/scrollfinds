import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://mayasworldwideweb.github.io/scrollfinds/ until a
  // custom domain is attached. Set this back to '/' the day you add one.
  base: '/scrollfinds/',
  plugins: [react(), tailwindcss()],
})
