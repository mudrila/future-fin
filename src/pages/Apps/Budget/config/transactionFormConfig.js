export default function createTransactionFormConfig({
  t,
  fromOptions,
  toOptions,
  fromValue,
  toValue
}) {
  return {
    formName: "transaction",
    fields: [
      {
        type: "autocomplete",
        name: "from",
        value: fromValue,
        options: fromOptions,
        label: t("transactionModal:form.fields.from.label"),
        placeholder: t("transactionModal:form.fields.from.placeholder"),
        required: true
      },
      {
        type: "autocomplete",
        name: "to",
        value: toValue,
        options: toOptions,
        label: t("transactionModal:form.fields.to.label"),
        placeholder: t("transactionModal:form.fields.to.placeholder"),
        required: true
      },
      {
        type: "number",
        name: "amount",
        required: true,
        label: t("transactionModal:form.fields.amount.label"),
        placeholder: "1000.00",
        fullWidth: true,
        variant: "outlined"
      },
      {
        type: "textbox",
        name: "comment",
        placeholder: t("transactionModal:form.fields.comment.placeholder"),
        label: t("transactionModal:form.fields.comment.label"),
        required: false,
        fullWidth: true,
        variant: "outlined"
      },
      {
        type: "date",
        name: "date",
        value: new Date(),
        disablePast: false,
        animateYearScrolling: true,
        variant: "inline",
        autoOk: true,
        required: true,
        variant: "outlined",
        fullWidth: true
      }
    ]
  };
}
