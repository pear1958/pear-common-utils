import { fileURLToPath } from 'url'
import { defineConfig } from 'rollup'
import RollupClear from 'rollup-plugin-clear'
import typescript2 from 'rollup-plugin-typescript2'
import { dts } from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: './index.ts',
    external: ['jszip'],
    plugins: [
      RollupClear({
        targets: ['dist/es', 'dist/lib'], // 每次打包清空dist目录，从新生成
        watch: false,
      }),
      typescript2(),
    ],
    output: [
      {
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: fileURLToPath(new URL('dist/es', import.meta.url)), // 配置打包根目录
        indent: false,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: fileURLToPath(new URL('dist/lib', import.meta.url)),
        indent: false,
      },
    ],
  },
  {
    input: './types/global.d.ts',
    output: [
      { file: 'dist/es/types/global.d.ts' },
      { file: 'dist/lib/types/global.d.ts' },
    ],
    plugins: [dts()],
  },
])
