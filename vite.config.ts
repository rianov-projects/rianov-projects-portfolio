import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
server: {
    port: 6001,
    strictPort: true, // Evita que Vite salte a otro puerto si este está ocupado
  }  
})