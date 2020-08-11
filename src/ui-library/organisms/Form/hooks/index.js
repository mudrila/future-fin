import { useState } from "react";
import { TextField } from "@material-ui/core";

export default function useForm({ fields, onSubmit }) {
  const initialFormState = {};
  fields.forEach(({ name, value }) => {
    initialFormState[name] = value;
  });

  const [formState, setFormState] = useState(initialFormState);

  function getComponentByFieldType(type) {
    switch (type) {
      case "text":
      default:
        return TextField;
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: value });
    targetField.onChange && targetField.onChange(event);
  }

  function handleSubmit() {
    onSubmit(formState);
  }
  return {
    getComponentByFieldType,
    handleChange,
    handleSubmit
  };
}
