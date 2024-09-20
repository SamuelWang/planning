import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    server: {
      host: process.env.VITE_DEV_HOST ? process.env.VITE_DEV_HOST : 'localhost',
      port: process.env.VITE_DEV_PORT ? Number.parseInt(process.env.VITE_DEV_PORT) : 5173
    },
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
