
const currencyHandler = new Intl.NumberFormat(undefined, {
    currency: "EUR", 
    style: "currency"
  })
  
  export function currencyFormat(number: number) {
    return currencyHandler.format(number)
  }
  