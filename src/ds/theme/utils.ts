export const selfOrFunction = <T>(
  props: any,
  t: T,
): T extends () => unknown ? ReturnType<T> : T =>
  typeof t === 'function' ? t(props) : t;

export const cssLength = (value?: number | string) => {
  if (typeof value === 'number') return `${value}px`;
  return value;
};

export type $<T> = {
  [K in keyof T as `$${Extract<K, string>}`]: T[K];
};
