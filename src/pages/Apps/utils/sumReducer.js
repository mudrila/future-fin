// TODO: Get all this data from BE instead of calculating this on FE!!!
const currencyMappings = {
  EUR: {
    EUR: 1,
    USD: 1.18,
    UAH: 33.26
  },
  USD: {
    EUR: 0.84,
    USD: 1,
    UAH: 27.9
  },
  UAH: {
    EUR: 0.03,
    USD: 0.036,
    UAH: 1
  }
};

export default function monthSumReducer(total, current, primaryCurrency) {
  let amountField = current.expectedAmount ? "expectedAmount" : "balance";
  const amountToPrimaryCurrency = toPrimaryCurrency(
    current,
    amountField,
    primaryCurrency
  );
  if (current.frequency) {
    if (current.frequency === "daily") {
      // ~Working month
      return Math.ceil(total + amountToPrimaryCurrency * 21);
    } else if (current.frequency === "weekly") {
      return Math.ceil(total + amountToPrimaryCurrency * 4);
    }
  }
  return Math.ceil(total + amountToPrimaryCurrency);
}

function toPrimaryCurrency(
  account,
  balanceFieldName = "balance",
  primaryCurrency
) {
  return Math.ceil(
    account[balanceFieldName] *
      currencyMappings[account.currency][primaryCurrency]
  );
}
