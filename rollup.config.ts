import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// rollup报错 Original error: __dirname is not defined in ES module scope

export default {
  input: './index.ts',
  external: ['jszip'],
  plugins: [typescript(), dts()],
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
}
