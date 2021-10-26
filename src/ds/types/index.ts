/*
 * Returns a type union of an oject's values' literal types.
 *
 * EXAMPLE:
 * const colors = { red: "#FF0000", blue: "#0000FF" } as const;
 * type ValidColor = ValueOf<typeof colors>;  // "#FF0000" | "#0000FF"
 */
export type ValueOf<T> = T[keyof T];
