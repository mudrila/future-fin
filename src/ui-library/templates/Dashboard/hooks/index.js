import { useState } from "react";

export default function useDashbaord({ formsConfig }) {
  let initialModalsState = {};
  Object.keys(formsConfig).forEach((formKey) => {
    initialModalsState[formKey] = {
      isModalOpen: false
    };
  });
  const [modalsState, setModalsState] = useState(initialModalsState);

  function handleModalOpen(formName) {
    console.log(formName, modalsState, {
      ...modalsState,
      [formName]: {
        isModalOpen: true
      }
    });
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

  return {
    modalsState,
    handleModalOpen,
    handleModalClose
  };
}
