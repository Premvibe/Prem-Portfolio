import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      tailwindcss: {
        darkMode: 'class', // Enable class-based dark mode
        content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}",
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
      },
    },
  },
})
