export default function createFormConfig(t) {
  return {
    formName: "sign-up",
    fields: [
      {
        type: "string",
        name: "name",
        required: true,
        placeholder: t("signUp:form.fields.name.placeholder"),
        label: t("signUp:form.fields.name.label"),
        value: "",
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "email",
        name: "email",
        required: true,
        placeholder: t("signUp:form.fields.email.placeholder"),
        label: t("signUp:form.fields.email.label"),
        value: "",
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "password",
        name: "password",
        required: true,
        placeholder: t("signUp:form.fields.password.placeholder"),
        label: t("signUp:form.fields.password.label"),
        helperText: t("signUp:form.fields.password.helperText"),
        value: "",
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "password",
        name: "repeatPassword",
        required: true,
        placeholder: t("signUp:form.fields.repeatPassword.placeholder"),
        label: t("signUp:form.fields.repeatPassword.label"),
        helperText: t("signUp:form.fields.repeatPassword.helperText"),
        value: "",
        variant: "outlined",
        fullWidth: true
      }
    ]
  };
}
