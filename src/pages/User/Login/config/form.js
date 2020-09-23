export default function createFormConfig(t) {
  return {
    formName: "login",
    fields: [
      {
        type: "email",
        name: "email",
        required: true,
        placeholder: t("login:form.fields.email.placeholder"),
        label: t("login:form.fields.email.label"),
        value: "",
        variant: "outlined",
        helperText: t("login:form.fields.email.helperText"),
        fullWidth: true
      },
      {
        type: "password",
        name: "password",
        required: true,
        placeholder: t("login:form.fields.password.placeholder"),
        label: t("login:form.fields.password.label"),
        value: "",
        variant: "outlined",
        helperText: t("login:form.fields.password.helperText"),
        fullWidth: true,
        validateAfterChange: true
      }
    ]
  };
}
