import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
    build: {
        target: 'es2022',
        outDir: 'build',
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
        ViteAliases(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        })
    ],
})