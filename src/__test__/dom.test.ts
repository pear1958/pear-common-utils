import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'

describe('111', () => {
  it('kkk', () => {
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
    const text = dom.window.document.querySelector('p')!.textContent
    console.log(text) // "Hello world"
    expect(text).toMatch(/Hello world/)
  })
})
