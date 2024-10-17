import { describe, expect, it, vi } from 'vitest'
import { debounce, delay } from '..'

describe('index-utils', () => {
  it('debounce', async () => {
    const fn = vi.fn()
    const debounceFn = debounce(fn)
    debounceFn()
    debounceFn()
    await delay(100)
    debounceFn()
    await delay(200)
    debounceFn()
    await delay(500)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
