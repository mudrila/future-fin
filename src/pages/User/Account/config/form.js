export default function createFormConfig({
  name,
  email,
  avatarUrl,
  avatarClassName
}) {
  return {
    formName: "user-account-form",
    fields: [
      {
        type: "imgAvatar",
        name: "avatar",
        required: true,
        label: "Your name",
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
        label: "Your email",
        value: email,
        variant: "outlined",
        fullWidth: true
      },
      {
        type: "password",
        name: "password",
        required: true,
        placeholder: "*********",
        label: "Your password",
        value: "********",
        variant: "outlined",
        fullWidth: true
      }
    ]
  };
}
