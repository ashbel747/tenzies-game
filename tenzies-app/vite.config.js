// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name
const repoName = 'tenzies-game'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 very important
})

