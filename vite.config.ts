import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from "url";


const toSnakeCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    emptyOutDir: true,
    sourcemap: false,
    outDir: 'dist',
    modulePreload: { polyfill: false },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    minify: 'terser',

    //General-purpose option for configuring Rollup: Minification, output format, etc.
    rollupOptions: {
      input: {
        A: path.resolve(__dirname, 'src/pages/page1/page-sdk.ts'),
        B: path.resolve(__dirname, 'src/pages/page2/page-sdk.ts'),
        C: path.resolve(__dirname, 'src/pages/page3/page-sdk.ts'),
      },
      output: {
        format: 'es',
        entryFileNames: ({ name }) => `${toSnakeCase(name)}.js`,
        manualChunks: undefined,
        inlineDynamicImports: false,
      },
    },
    cleanDestDir: true,
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  publicDir: 'public',
})
