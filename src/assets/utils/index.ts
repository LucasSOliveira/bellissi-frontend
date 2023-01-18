/* eslint-disable */

export function serialize(obj: any): string {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')
}

export function resetScroll(): void {
  window.scroll({ top: 0 });
}

export function copy(toBeCloned: any): any {
  return toBeCloned ? JSON.parse(JSON.stringify(toBeCloned)) : toBeCloned
}

export const isUndef = (value: any): boolean => value === undefined || value === null

export function currencyFormat (value: any, locale = 'pt-BR') {
  if (!value && value !== 0) { return '' }
  if (typeof value !== 'number') {
    value = parseFloat(value)
  }
  return value.toLocaleString(locale, { style: 'currency', currency: 'BRL' })
}