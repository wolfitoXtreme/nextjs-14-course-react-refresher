import * as path from 'path';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      esbuildOptions: { loader: 'tsx' },
    }),
  ],
  build: {
    sourcemap: 'inline',
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
