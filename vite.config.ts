import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  ssr: {
      optimizeDeps: {
        include: ['ionicons/icons', '@ionic/react'],
      },
      noExternal: ['ionicons/icons', '@ionic/react'],
    },
})
