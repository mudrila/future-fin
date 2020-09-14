export default function sumReducer(total, current) {
  // TODO: Grab currency exchange rate from some open data source instead of hardcoding
  const currencyMappingToUAH = {
    EUR: 32.5,
    USD: 27.3,
    UAH: 1
  };

  let amount = current.expectedAmount;
  if (typeof amount === "undefined") {
    amount = current.balance;
  }
  const amountToUAH = amount * currencyMappingToUAH[current.currency];
  if (current.frequency) {
    if (current.frequency === "daily") {
      // ~Working month
      return total + amountToUAH * 21;
    } else if (current.frequency === "weekly") {
      return total + amountToUAH * 4;
    }
  }
  return total + amountToUAH;
}
