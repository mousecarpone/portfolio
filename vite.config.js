import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/',
  // base: '/portfolio/', for github pages deployment
  plugins: [react()],
})
