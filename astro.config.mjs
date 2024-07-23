import { defineConfig } from "astro/config";

export default defineConfig({
    site: 'https://roy-buhay.github.io',
    base: 'roy-buhay',
    vite: {
        build: {
            assetsInclude: ['**/*.png','**/*.jpg','**/*.svg'],
        },
    },
})