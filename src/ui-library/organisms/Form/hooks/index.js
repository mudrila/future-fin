import { useState } from "react";
import { TextField, Avatar } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DatePicker } from "@material-ui/pickers";
import { format } from "date-fns";

import {
  IconSelector,
  SwitchField,
  CheckboxField,
  CountrySelector
} from "../../../";

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
      case "autocomplete":
        return Autocomplete;
      case "iconSelection":
        return IconSelector;
      case "switcher":
        return SwitchField;
      case "checkbox":
        return CheckboxField;
      case "imgAvatar":
        return Avatar;
      case "date":
        return DatePicker;
      case "countrySelector":
        return CountrySelector;
      case "text":
      default:
        return TextField;
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
        onChange: (value) => handleDateTimeChange({ name: field.name, value })
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
  function handleDateTimeChange(field) {
    const { name, value } = field;
    const targetField = fields.find((field) => name === field.name);
    setFormState({ ...formState, [name]: format(value, "yyyy-MM-dd") });
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

  function handleSubmit(event) {
    event.preventDefault();
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
