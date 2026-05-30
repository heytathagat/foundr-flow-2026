import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to a sub-path (e.g. GitHub Pages project site),
  // set base: '/<repo-name>/'
  base: '/',
});
