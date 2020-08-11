import { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
      case "autocomplete":
        return Autocomplete;
    }
  }

  function handleAutocompleteChange(name, value) {
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: value });
    targetField.onChange && targetField.onChange(event);
  }
  function handleChange(event, ...rest) {
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
    handleAutocompleteChange,
    handleSubmit,
    formState
  };
}
