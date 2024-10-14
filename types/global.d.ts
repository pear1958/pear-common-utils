export declare type Recordable<T = any> = Record<string, T>

export declare type Nullable<T> = T | null

export declare type TargetContext = '_self' | '_blank'

export declare interface LabelValue<T = string | number> {
  label: string
  value: T
  [key: string]: any
}

export declare type TimeoutId = NodeJS.Timeout | string | number | undefined
