
const currencyHandler = new Intl.NumberFormat(undefined, {
    currency: "EUR", 
    style: "currency"
  })
  
  export function currencyFormat(number: number) {
    return currencyHandler.format(number)
  }
  

// for shuffle arrays
export const shuffle = (array: any[]) => { 
  return array.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value); 
}; 