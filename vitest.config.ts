import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types'),
    },
  },
  test: {
    environment: 'jsdom',
    // 启用 vitest-ui
    reporters: ['html'],
    // 在 ui 中添加 覆盖率报告 按钮
    coverage: {
      enabled: true,
    },
  },
})
