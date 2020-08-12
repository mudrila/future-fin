import { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IconSelector } from "../../../";

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
      case "iconSelection":
        return IconSelector;
    }
  }

  function getInputPropsByFieldType(type) {
    let inputProps = {
      ...field,
      onChange: handleChange,
      value: formState[field.name]
    };
    if (field.type === "autocomplete") {
      // eslint-disable-next-line react/display-name
      inputProps.renderInput = (params) => (
        <TextField
          {...params}
          label={field.label}
          variant="outlined"
          helperText={field.helperText}
        />
      );
      inputProps.getOptionLabel = (option) => {
        return option.label;
      };
      inputProps.getOptionSelected = (option, value) => {
        return option.value === value;
      };

      inputProps.onChange = (event, value) =>
        handleAutocompleteChange(field.name, value);
    }
    return inputProps;
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
    getInputPropsByFieldType,
    formState
  };
}
