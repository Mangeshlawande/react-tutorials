import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{ 
      // url append behind api and ensures proxy comes from these url 
      '/api':'http://localhost:3000',  
      // request ki origin isi url se  
    },
  },
  plugins: [react()],
})
