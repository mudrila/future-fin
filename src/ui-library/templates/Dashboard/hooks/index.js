import { useState } from "react";

export default function useDashbaord({ formsConfig, onSubmit }) {
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
    onSubmit(formName, formValues);
  }
  return {
    modalsState,
    handleModalOpen,
    handleModalClose,
    handleSubmit
  };
}
