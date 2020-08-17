import { useState } from "react";

export default function useDashbaord({
  formsConfig,
  onSubmit,
  normalizeFormData,
  onDelete,
  onEdit
}) {
  let initialModalsState = {};
  Object.keys(formsConfig).forEach((formKey) => {
    initialModalsState[formKey] = {
      isModalOpen: false
    };
  });
  const [modalsState, setModalsState] = useState(initialModalsState);

  function handleModalOpen(formName) {
    setModalsState({
      ...modalsState,
      [formName]: {
        isModalOpen: true
      }
    });
  }
  function handleModalClose(formName) {
    setModalsState({
      ...modalsState,
      [formName]: false
    });
  }

  function handleSubmit(formName, formValues) {
    if (normalizeFormData) {
      onSubmit(formName, normalizeFormValues(formValues));
    } else {
      onSubmit(formName, formValues);
    }
    handleModalClose(formName);
  }
  function normalizeFormValues(formValues) {
    let result = {};

    Object.keys(formValues).forEach((entryKey) => {
      if (formValues[entryKey].value) {
        result[entryKey] = formValues[entryKey].value;
      } else {
        result[entryKey] = formValues[entryKey];
      }
    });

    return result;
  }

  function handleDeleteCategory({ item, entityPartName }) {
    onDelete({ item, entityPartName });
  }

  function handleEdit({ item, entityPartName }) {
    onEdit({ item, entityPartName });
  }

  return {
    modalsState,
    handleModalOpen,
    handleModalClose,
    handleSubmit,
    handleDeleteCategory,
    handleEdit
  };
}
