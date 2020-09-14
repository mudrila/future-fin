export default function createFormConfig({
  name,
  email,
  avatarUrl,
  avatarClassName,
  hasLifeInsurance,
  hasMedicalInsurance,
  country
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
        placeholder: "John Doe",
        label: "Your name",
        value: name,
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "email",
        name: "email",
        required: true,
        placeholder: "admin@example.com",
        label: "New email",
        value: email,
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "password",
        name: "password",
        required: false,
        placeholder: "*********",
        label: "New password",
        value: "",
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "countrySelector",
        name: "country",
        required: false,
        label: "Country",
        helperText: "What is your country?",
        value: country,
        fullWidth: true
      },
      {
        type: "checkbox",
        name: "hasLifeInsurance",
        required: false,
        label: "Life Insurance",
        value: hasLifeInsurance,
        helperText: "Do you have life insurance?",
        checked: hasLifeInsurance,
        fullWidth: true,
        bordered: true
      },
      {
        type: "checkbox",
        name: "hasMedicalInsurance",
        required: false,
        label: "Medical Insurance",
        value: hasMedicalInsurance,
        helperText: "Do you have medical insurance?",
        checked: hasMedicalInsurance,
        fullWidth: true,
        bordered: true
      }
    ]
  };
}
