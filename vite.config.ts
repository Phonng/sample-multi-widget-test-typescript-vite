import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        page1: path.resolve(__dirname, 'src/pages/page1/page-sdk.ts'),
        page2: path.resolve(__dirname, 'src/pages/page2/page-sdk.ts'),
        page3: path.resolve(__dirname, 'src/pages/page3/page-sdk.ts'),
      },
      name: 'MyLibrary',
      fileName: (_, data) => {
        return `${data}.js`
      }
    },
    cleanDestDir: true
  }
})
