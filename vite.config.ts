import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx'],
      rollupTypes: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'Design System Study',
      formats: ['es', 'umd'],
      fileName: (format) => `design-system-study.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(packageJson.dependencies), // externalize to not include in package
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chakra-ui/react': 'ChakraReact',
          '@chakra-ui/icons': 'ChakraIcons',
        },
      },
    },
  },
});
