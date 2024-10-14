export type Recordable<T = any> = Record<string, T>

export type Nullable<T> = T | null

export type TargetContext = '_self' | '_blank'

export interface LabelValue<T = string | number> {
  label: string
  value: T
  [key: string]: any
}

export type TimeoutId = NodeJS.Timeout | string | number | undefined
