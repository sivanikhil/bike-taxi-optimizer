import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log("--------------------------------------------------")
console.log("VITE IS RUNNING INSIDE DIRECTORY:", process.cwd())
console.log("--------------------------------------------------")

export default defineConfig({
  plugins: [react()],
})