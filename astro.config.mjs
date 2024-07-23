import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
    site: 'https://roy-buhay.github.io',
    base: '/',
    image: {
        service: passthroughImageService(),
    },
    vite: {
        build: {
            assetsInclude: ['**/*.png','**/*.jpg','**/*.svg'],
        },
    },
})