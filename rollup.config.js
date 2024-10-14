import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import RollupClear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { dts } from 'rollup-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default [
  {
    input: './index.ts',
    external: ['jszip'],
    plugins: [
      RollupClear({
        targets: ['dist/es', 'dist/lib'], // 每次打包清空dist目录，从新生成
        watch: false,
      }),
      typescript(),
    ],
    output: [
      {
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: resolve(__dirname, './dist/es'), // 配置打包根目录
        indent: false,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: resolve(__dirname, './dist/lib'),
        indent: false,
      },
    ],
  },
  {
    input: "./types/global.d.ts",
    output: [{ file: "dist/es/types/global.d.ts" }],
    plugins: [dts()],
  },
]
