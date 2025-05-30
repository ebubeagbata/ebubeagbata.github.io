import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import devtoolsJson from "vite-plugin-devtools-json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), devtoolsJson()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  ssr: {
    optimizeDeps: {
      include: ["ionicons/icons", "@ionic/react"],
    },
    noExternal: ["ionicons/icons", "@ionic/react"],
  },
});
