import { describe, it, expect } from 'vitest'
import { genUUID, genShortUUID } from '@/uuid'

describe('uuid', () => {
  it('生成32位的uuid', () => {
    expect(genUUID()).toHaveLength(32)
  })
  it('生成 prefix + 24位长度的uuid', () => {
    expect(genShortUUID('test_prefix')).toMatch(/test_prefix_\d{23}/)
  })
})
