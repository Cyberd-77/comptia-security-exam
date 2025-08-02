import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path to the repository name for GitHub Pages deployment.
  // This is crucial for project pages hosted at a subdirectory like `/comptia-security-exam/`.
  base: '/comptia-security-exam/',
  build: {
    // Specify the output directory for the build. The GitHub Actions workflow
    // is configured to use this `dist` folder.
    outDir: 'dist',
    // Set the directory for static assets (like CSS, JS, and images)
    assetsDir: 'assets',
  },
})
