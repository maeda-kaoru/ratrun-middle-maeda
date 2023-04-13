export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/scss/reset.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },
});
