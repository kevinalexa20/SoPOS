// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["nuxt-primevue"],
  primevue: {
    // Configuration primevue
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./presets/aura/") }, //import and apply preset
    components: {
      include: ["Button"],
    },
  },
  srcDir: "src/",
});
