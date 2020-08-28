export default {
  formName: "sign-up",
  fields: [
    {
      type: "string",
      name: "name",
      required: true,
      placeholder: "John Doe",
      label: "Your name",
      value: "",
      variant: "outlined",
      fullWidth: true
    },
    {
      type: "email",
      name: "email",
      required: true,
      placeholder: "admin@example.com",
      label: "Your email",
      value: "",
      variant: "outlined",
      fullWidth: true
    },
    {
      type: "password",
      name: "password",
      required: true,
      placeholder: "*********",
      label: "Your password",
      value: "",
      variant: "outlined",
      fullWidth: true
    }
  ]
};
