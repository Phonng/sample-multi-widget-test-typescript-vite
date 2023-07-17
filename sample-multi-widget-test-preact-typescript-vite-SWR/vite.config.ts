
import path from 'path'
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    outDir: 'dist',
    lib: {
      entry: {
        A: path.resolve(__dirname, 'src/pages/page1/page-sdk.ts'),
        B: path.resolve(__dirname, 'src/pages/page2/page-sdk.ts'),
        C: path.resolve(__dirname, 'src/pages/page3/page-sdk.ts'),
      },
      name: (name) => name,
      fileName: (_, data) => {
        return `${data}.js`
      },
      formats: ['es']
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // NOTE: add lib to inputRollUpOption is a workaround 
        // because when using this option will build all file lib into 1 file js
        A: path.resolve(__dirname, 'src/pages/page1/page-sdk.ts'),
        B: path.resolve(__dirname, 'src/pages/page2/page-sdk.ts'),
        C: path.resolve(__dirname, 'src/pages/page3/page-sdk.ts'),
      },
    },
    cleanDestDir: true,
    minify: true
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
