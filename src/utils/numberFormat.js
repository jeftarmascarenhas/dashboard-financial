export const currencyFormat = (number, currency = 'USD') =>
  number.toLocaleString('en-US', { style: 'currency', currency })
