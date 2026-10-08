import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Expose RENDER_SERVER1, RENDER_SERVER2, ... to the browser bundle (they're public URLs anyway).
  // Vite only exposes vars matching these prefixes; default is VITE_ alone.
  envPrefix: ['VITE_', 'RENDER_SERVER', 'render_server'],
})
