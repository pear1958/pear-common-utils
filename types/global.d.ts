declare type Recordable<T = any> = Record<string, T>

declare type Nullable<T> = T | null

declare type TargetContext = '_self' | '_blank'

declare interface LabelValue<T = string | number> {
  label: string
  value: T
  [key: string]: any
}

declare type TimeoutId = NodeJS.Timeout | string | number | undefined