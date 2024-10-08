import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      outDir: ['./dist/es', './dist/lib'],
      copyDtsFiles: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: './index.ts',
      // 通过cdn引入后的全局变量名称
      name: 'PearCommonUtils',
    },
    rollupOptions: {
      external: ['jszip'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/es'), // 配置打包根目录
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/lib'),
        },
      ],
    },
  },
})
