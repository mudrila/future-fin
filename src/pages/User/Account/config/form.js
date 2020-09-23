export default function createFormConfig({
  name,
  email,
  avatarUrl,
  avatarClassName,
  hasLifeInsurance,
  hasMedicalInsurance,
  country,
  t
}) {
  return {
    formName: "user-account-form",
    fields: [
      {
        type: "imgAvatar",
        name: "avatarUrl",
        required: true,
        value: avatarUrl,
        className: avatarClassName
      },
      {
        type: "string",
        name: "name",
        required: true,
        placeholder: t("userAccount:form.fields.name.placeholder"),
        label: t("userAccount:form.fields.name.label"),
        value: name,
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "email",
        name: "email",
        required: true,
        placeholder: t("userAccount:form.fields.email.placeholder"),
        label: t("userAccount:form.fields.email.label"),
        value: email,
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "password",
        name: "password",
        required: false,
        placeholder: t("userAccount:form.fields.password.placeholder"),
        label: t("userAccount:form.fields.password.label"),
        value: "",
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "countrySelector",
        name: "country",
        required: false,
        label: t("userAccount:form.fields.country.label"),
        helperText: t("userAccount:form.fields.country.helperText"),
        value: country,
        fullWidth: true
      },
      {
        type: "checkbox",
        name: "hasLifeInsurance",
        required: false,
        label: t("userAccount:form.fields.hasLifeInsurance.label"),
        value: hasLifeInsurance,
        helperText: t("userAccount:form.fields.hasLifeInsurance.helperText"),
        checked: hasLifeInsurance,
        fullWidth: true,
        bordered: true
      },
      {
        type: "checkbox",
        name: "hasMedicalInsurance",
        required: false,
        label: t("userAccount:form.fields.hasMedicalInsurance.label"),
        value: hasMedicalInsurance,
        helperText: t("userAccount:form.fields.hasMedicalInsurance.helperText"),
        checked: hasMedicalInsurance,
        fullWidth: true,
        bordered: true
      }
    ]
  };
}
