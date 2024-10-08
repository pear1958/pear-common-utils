/**
 * 判断两个对象是否相同
 */
export function isEqualObject(a: Recordable, b: Recordable): Boolean {
  if (!a || !b) return false

  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  if (aProps.length != bProps.length) return false

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]
    const aPropVal = a[propName]
    const bPropVal = b[propName]

    if (!b.hasOwnProperty(propName)) return false

    if (aPropVal instanceof Object) {
      if (!isEqualObject(aPropVal, bPropVal)) return false
    } else if (aPropVal !== bPropVal) {
      return false
    }
  }

  return true
}
