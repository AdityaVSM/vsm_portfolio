import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // public/assets holds the design kit (system.css, motion, moments); keep Vite's bundles apart
  build: { assetsDir: 'static' },
})
