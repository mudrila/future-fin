import PropTypes from "prop-types";
import { Button, CircularProgress } from "@material-ui/core";

import FormSections from "./components/Sections";
import FormFields from "./components/Fields";

import useForm from "./hooks";
import useStyles from "../FormDialog/styles";

export default function Form({
  fields,
  onSubmit,
  sectionsSplitting = false,
  sections,
  formName,
  submitButtonText,
  loading = false,
  formClassName,
  validateForm,
  shouldRenderSubmitButton = true,
  formRef
}) {
  const {
    getComponentByFieldType,
    getInputPropsByField,
    handleSubmit,
    t,
    mappedFields,
    formValid
  } = useForm({
    fields,
    onSubmit,
    validateForm
  });
  let translatedSubmitButtonText = submitButtonText || t("submit");
  return (
    <form
      name={formName}
      onSubmit={handleSubmit}
      className={formClassName}
      ref={formRef}
    >
      {sectionsSplitting ? (
        <FormSections
          sections={sections}
          getComponentByFieldType={getComponentByFieldType}
          getInputPropsByField={getInputPropsByField}
        />
      ) : (
        <FormFields
          fields={mappedFields}
          getComponentByFieldType={getComponentByFieldType}
          getInputPropsByField={getInputPropsByField}
        />
      )}
      {shouldRenderSubmitButton && (
        <Button
          color="primary"
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading || !formValid}
        >
          {loading ? <CircularProgress /> : translatedSubmitButtonText}
        </Button>
      )}
    </form>
  );
}

Form.propTypes = {
  formClassName: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      id: PropTypes.string
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  sectionsSplitting: PropTypes.bool,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          onChange: PropTypes.func,
          id: PropTypes.string
        })
      ).isRequired
    })
  ),
  submitButtonText: PropTypes.string,
  loading: PropTypes.bool,
  validateForm: PropTypes.func,
  shouldRenderSubmitButton: PropTypes.bool,
  formRef: PropTypes.shape({
    current: PropTypes.shape({
      dispatchEvent: PropTypes.func
    })
  })
};
