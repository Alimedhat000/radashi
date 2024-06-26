import { isArray } from 'radashi'

type KeyOf<T extends object> = object extends T ? keyof any : keyof T
type ValueOf<T extends object> = object extends T ? unknown : T[keyof T]

export type KeyFilterFunction<T extends object = object> = (
  value: ValueOf<T>,
  key: KeyOf<T>,
  obj: T
) => boolean

/**
 * Functions can use this type to accept either an array of keys or a
 * filter callback. This provides type safety for such a parameter
 * type, whose value can then be passed into `matchKeys` to receive a
 * matching function.
 */
export type KeyFilter<
  T extends object = object,
  Key extends keyof any = keyof any
> = KeyFilterFunction<T> | readonly Key[]

/**
 * Returns true if the key is in the “keys array” or if the “filter
 * function” returns true.
 */
export const filterKey = (
  obj: object,
  key: string,
  keys: KeyFilter
): boolean => {
  return isArray(keys)
    ? Object.hasOwnProperty.call(obj, key) && keys.includes(key)
    : keys((obj as any)[key], key, obj)
}
