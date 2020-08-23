import { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DatePicker } from "@material-ui/pickers";

import { IconSelector, SwitchField, CheckboxField } from "../../../";

export default function useForm({ fields, onSubmit }) {
  const initialFormState = {};
  fields.forEach(({ name, value, checked, type }) => {
    if (type === "checkbox") {
      initialFormState[name] = checked;
    } else {
      initialFormState[name] = value;
    }
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
      case "switcher":
        return SwitchField;
      case "checkbox":
        return CheckboxField;
      case "date":
        return DatePicker;
    }
  }

  function getInputPropsByField(field) {
    let inputProps;
    if (field.type === "autocomplete") {
      inputProps = {
        ...field,
        // eslint-disable-next-line react/display-name
        renderInput: (params) => (
          <TextField
            {...params}
            label={field.label}
            variant="outlined"
            helperText={field.helperText}
          />
        ),
        getOptionLabel: (option) => {
          return option.label;
        },
        getOptionSelected: (option, value) => {
          return option.value === value.value;
        },
        onChange: (event, value) => handleAutocompleteChange(field.name, value),
        value: formState[field.name]
      };
    } else if (field.type === "iconSelection") {
      inputProps = {
        ...field,
        onChange: handleIconSelectionChange,
        value: formState[field.name]
      };
    } else if (field.type === "checkbox") {
      inputProps = {
        ...field,
        onChange: handleCheckboxChange,
        checked: formState[field.name]
      };
    } else if (field.type === "date") {
      inputProps = {
        ...field,
        onChange: (value) =>
          handleChange({ target: { name: field.name, value } }) // Simulating event.target
      };
    } else {
      inputProps = {
        ...field,
        onChange: handleChange,
        value: formState[field.name]
      };
    }
    return inputProps;
  }

  function handleAutocompleteChange(name, value) {
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: value });
    targetField.onChange && targetField.onChange(event);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: value });
    targetField.onChange && targetField.onChange(event);
  }
  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: checked });
    targetField.onChange && targetField.onChange(event);
  }
  function handleIconSelectionChange(event) {
    const iconName = event.currentTarget.getAttribute("title");
    const fieldName = event.currentTarget.getAttribute("name");
    setFormState({ ...formState, [fieldName]: iconName });
  }

  function handleSubmit() {
    onSubmit(formState);
    setFormState(initialFormState);
  }
  return {
    getComponentByFieldType,
    handleChange,
    handleAutocompleteChange,
    handleSubmit,
    getInputPropsByField,
    formState
  };
}
