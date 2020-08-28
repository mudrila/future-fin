export default {
  formName: "login",
  fields: [
    {
      type: "email",
      name: "email",
      required: true,
      placeholder: "admin@example.com",
      label: "Your email",
      value: "",
      variant: "outlined",
      helperText: "Email used during Sign Up",
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
      helperText: "Password used during Sign Up",
      fullWidth: true
    }
  ]
};
