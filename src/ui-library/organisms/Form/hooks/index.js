import { useState, useEffect } from "react";
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

import { useTranslation } from "../../../../i18n";

export default function useForm({ fields, onSubmit, validateForm }) {
  const initialFormState = {};
  fields.forEach(({ name, value, checked, type }) => {
    if (type === "checkbox") {
      initialFormState[name] = checked;
    } else {
      initialFormState[name] = value;
    }
  });

  const { t } = useTranslation();
  const [formState, setFormState] = useState(initialFormState);
  const [mappedFields, setMappedFields] = useState(fields);
  const [formValid, setFormValid] = useState(true);

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
    } else if (field.type === "countrySelector") {
      inputProps = {
        ...field,
        value: formState[field.name],
        onChange: (event, value) => handleAutocompleteChange(field.name, value)
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
    const newFormState = { ...formState, [name]: value };
    setFormState(newFormState);
    targetField.onChange && targetField.onChange({ name, value });
    targetField.validateAfterChange && validateAndRemapFields(newFormState);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    const targetField = fields.find((field) => name === field.name);
    const newFormState = { ...formState, [name]: value };
    setFormState(newFormState);
    targetField.onChange && targetField.onChange(event);
    targetField.validateAfterChange && validateAndRemapFields(newFormState);
  }
  function handleDateTimeChange(field) {
    const { name, value } = field;
    const targetField = fields.find((field) => name === field.name);
    const newFormState = { ...formState, [name]: format(value, "yyyy-MM-dd") };
    setFormState(newFormState);
    targetField.onChange && targetField.onChange(event);
    targetField.validateAfterChange && validateAndRemapFields(newFormState);
  }
  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    const targetField = fields.find((field) => name === field.name);
    const newFormState = { ...formState, [name]: checked };
    setFormState(newFormState);
    targetField.onChange && targetField.onChange(event);
    targetField.validateAfterChange && validateAndRemapFields(newFormState);
  }
  function handleIconSelectionChange(event) {
    const iconName = event.currentTarget.getAttribute("title");
    const fieldName = event.currentTarget.getAttribute("name");
    setFormState({ ...formState, [fieldName]: iconName });
  }

  function validateAndRemapFields(newFormState, validCallback) {
    if (validateForm) {
      const { isValid, errors } = validateForm(newFormState);
      if (isValid) {
        setFormValid(true);
        const updatedMappedFields = fields.map((field) => ({
          ...field,
          error: false,
          helperText: field.helperText
        }));
        setMappedFields(updatedMappedFields);
        validCallback && validCallback();
      } else {
        const updatedMappedFields = fields.map((field) => ({
          ...field,
          error: !!Object.keys(errors).find(
            (fieldName) => fieldName === field.name
          ),
          helperText: errors[field.name] || field.helperText
        }));
        setMappedFields(updatedMappedFields);
        setFormValid(false);
      }
    } else {
      // If no validate function provided - just call valid callback
      validCallback && validCallback();
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    validateAndRemapFields(formState, performSubmit);
    function performSubmit() {
      setFormValid(true);
      onSubmit(formState);
      setFormState(initialFormState);
    }
  }

  useEffect(() => {
    setFormState(initialFormState);
  }, [JSON.stringify(fields)]);

  return {
    getComponentByFieldType,
    handleChange,
    handleAutocompleteChange,
    handleSubmit,
    getInputPropsByField,
    formState,
    t,
    mappedFields,
    formValid
  };
}
