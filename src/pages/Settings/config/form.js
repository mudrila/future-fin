export default function createFormConfig({
  defaultCurrency,
  defaultLanguage,
  financialProfileAllocation,
  financialProfileAllocationInputClassName,
  t
}) {
  const currencyOptions = [
    { label: t("appSettings:currencyOptions.USD"), value: "USD" },
    { label: t("appSettings:currencyOptions.EUR"), value: "EUR" },
    { label: t("appSettings:currencyOptions.UAH"), value: "UAH" }
  ];
  const languageOptions = [
    { label: t("appSettings:languageOptions.en"), value: "en" },
    { label: t("appSettings:languageOptions.fr"), value: "fr" },
    { label: t("appSettings:languageOptions.de"), value: "de" },
    { label: t("appSettings:languageOptions.ua"), value: "ua" },
    { label: t("appSettings:languageOptions.ru"), value: "ru" }
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
        label: t("appSettings:form.fields.defaultCurrency.label"),
        helperText: t("appSettings:form.fields.defaultCurrency.helperText"),
        value: defaultCurrencyValue,
        options: currencyOptions,
        fullWidth: true
      },
      {
        type: "autocomplete",
        name: "defaultLanguage",
        required: true,
        label: t("appSettings:form.fields.defaultLanguage.label"),
        helperText: t("appSettings:form.fields.defaultLanguage.label"),
        value: defaultLanguageValue,
        options: languageOptions,
        fullWidth: true
      },
      {
        type: "number",
        name: "financialProfileAllocationSavings",
        required: true,
        label: t(
          "appSettings:form.fields.financialProfileAllocationSavings.label"
        ),
        helperText: t(
          "appSettings:form.fields.financialProfileAllocationSavings.helperText"
        ),
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
        label: t(
          "appSettings:form.fields.financialProfileAllocationDebts.label"
        ),
        helperText: t(
          "appSettings:form.fields.financialProfileAllocationDebts.helperText"
        ),
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
        label: t(
          "appSettings:form.fields.financialProfileAllocationInvestments.label"
        ),
        helperText: t(
          "appSettings:form.fields.financialProfileAllocationInvestments.helperText"
        ),
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
