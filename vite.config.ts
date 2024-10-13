import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    sourcemap: false,
    outDir: 'dist',
    //Specialized option for building JavaScript libraries: ES modules, CommonJS modules, dynamic import polyfill
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
    //General-purpose option for configuring Rollup: Minification, output format, etc.
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
