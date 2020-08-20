import { useState } from "react";

export default function useDashbaord({
  formsConfig,
  onSubmit,
  normalizeFormData,
  onDelete,
  onEdit
}) {
  let initialModalsState = {};
  const formNames = Object.keys(formsConfig);
  formNames.forEach((formKey) => {
    initialModalsState[formKey] = {
      isModalOpen: false
    };
  });
  const [createModalsState, setCreateModalsState] = useState(
    initialModalsState
  );
  const [editModalsState, setEditModalsState] = useState(initialModalsState);
  const [currentEditableEntity, setCurrentEditableEntity] = useState(null);

  function handleCreateModalOpen(formName) {
    setCreateModalsState({
      ...createModalsState,
      [formName]: {
        isModalOpen: true
      }
    });
  }
  function handleCreateModalClose(formName) {
    setCreateModalsState({
      ...createModalsState,
      [formName]: {
        isModalOpen: false
      }
    });
  }

  function handleEditModalOpen({ item, entityPartName }) {
    setEditModalsState({
      ...editModalsState,
      [item.id]: {
        isModalOpen: true
      }
    });
    setCurrentEditableEntity({ item, entityPartName });
  }
  function handleEditModalClose(item) {
    setEditModalsState({
      ...editModalsState,
      [item.id]: {
        isModalOpen: false
      }
    });
    setCurrentEditableEntity(null);
  }
  function handleSubmit(formName, formValues) {
    if (normalizeFormData) {
      onSubmit(formName, normalizeFormValues(formValues));
    } else {
      onSubmit(formName, formValues);
    }
    handleCreateModalClose(formName);
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
    if (normalizeFormData) {
      onEdit({
        item: { ...currentEditableEntity.item, ...normalizeFormValues(item) },
        entityPartName
      });
    } else {
      onEdit({
        item: { ...currentEditableEntity.item, ...item },
        entityPartName
      });
    }
    handleEditModalClose(currentEditableEntity);
  }

  function mapEntityToEditFormProps({ item, entityPartName }) {
    const initialFormConfig = formsConfig[entityPartName];
    const formConfig = {
      formName: initialFormConfig.formName,
      sections: initialFormConfig.sections.map((section) => {
        return {
          ...section,
          fields: section.fields.map((field) => {
            if (field.type === "autocomplete") {
              return {
                ...field,
                value: { value: item[field.name], label: item[field.name] }
              };
            } else {
              return {
                ...field,
                value: item[field.name]
              };
            }
          })
        };
      })
    };
    return formConfig;
  }
  return {
    createModalsState,
    editModalsState,
    handleCreateModalOpen,
    handleCreateModalClose,
    handleSubmit,
    handleDeleteCategory,
    handleEditModalClose,
    handleEdit,
    handleEditModalOpen,
    currentEditableEntity,
    mapEntityToEditFormProps
  };
}
