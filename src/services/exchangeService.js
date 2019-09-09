class ExchangeService {
  static getSeriesMonthy() {
    return fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=GV3PBTZFHLTL96WS',
    )
  }

  static getSymbolSearch(search) {
    return fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=GV3PBTZFHLTL96WS`,
    )
  }
}

export default ExchangeService
