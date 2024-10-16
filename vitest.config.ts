import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    // 启用 vitest-ui
    reporters: ['html'],
    // 在 ui 中添加 覆盖率报告 按钮
    coverage: {
      enabled: true
    }
  },
})
