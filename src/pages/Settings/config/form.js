export default function createFormConfig({
  defaultCurrency,
  defaultLanguage,
  financialProfileAllocation,
  financialProfileAllocationInputClassName
}) {
  const currencyOptions = [
    { label: "US Dollars", value: "USD" },
    { label: "European Euro", value: "EUR" },
    { label: "Ukrainian Hryvna", value: "UAH" }
  ];
  const languageOptions = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "Ukrainian", value: "ua" },
    { label: "Russian", value: "ru" }
  ];
  const defaultLanguageValue = languageOptions.find(
    (language) => language.value === defaultLanguage
  );
  const defaultCurrencyValue = currencyOptions.find(
    (currency) => currency.value === defaultCurrency
  );
  return {
    formName: "app-settings-form",
    fields: [
      {
        type: "autocomplete",
        name: "defaultCurrency",
        required: true,
        label: "Default Currency",
        helperText:
          "In which currency you want to see countings, totals and so on?",
        value: defaultCurrencyValue,
        options: currencyOptions,
        fullWidth: true
      },
      {
        type: "autocomplete",
        name: "defaultLanguage",
        required: true,
        label: "Default Language",
        helperText:
          "What is your default language for news, push notifications, app translation?",
        value: defaultLanguageValue,
        options: languageOptions,
        fullWidth: true
      },
      {
        type: "number",
        name: "financialProfileAllocationSavings",
        required: true,
        label: "Savings Allocation %",
        helperText:
          "How much of your 'free' money you want to put on build your significant savings? Would be passed to debts, if you already have enough savings.",
        value: financialProfileAllocation.savings,
        variant: "outlined",
        fullWidth: false,
        className: financialProfileAllocationInputClassName,
        min: 0,
        max: 100
      },
      {
        type: "number",
        name: "financialProfileAllocationDebts",
        required: true,
        label: "Debts Allocation %",
        helperText:
          "How much (in %) of your 'free' money you want to put on debts payout? Would be passed to either savings (if not enough), or to investmens (if enough savings)if you have no debts/credits.",
        value: financialProfileAllocation.debtsPayout,
        variant: "outlined",
        fullWidth: false,
        className: financialProfileAllocationInputClassName,
        min: 0,
        max: 100
      },
      {
        type: "number",
        name: "financialProfileAllocationInvestments",
        required: true,
        label: "Investments Allocation %",
        helperText:
          "How much(in %)  of your 'free' money you want to put on investments?",
        value: financialProfileAllocation.investments,
        variant: "outlined",
        fullWidth: false,
        className: financialProfileAllocationInputClassName,
        min: 0,
        max: 100
      }
    ]
  };
}
