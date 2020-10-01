import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { FormDialog } from "../../../../ui-library";

import useTransactionModal from "./hooks";

export default function TransactionModal({
  fromValue,
  toValue,
  fromOptions,
  toOptions,
  open,
  onClose,
  onSubmit
}) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { formConfig, handleSubmit, t } = useTransactionModal({
    fromValue,
    toValue,
    fromOptions,
    toOptions,
    onSubmit
  });

  return (
    <FormDialog
      fullScreen={isMobile}
      formProps={formConfig}
      sectionsSplitting={false}
      onSubmit={handleSubmit}
      onClose={onClose}
      open={open}
      title={t("transactionModal:title")}
      submitButtonText={t("transactionModal:form.submitButtonText")}
      cancelButtonText={t("transactionModal:form.cancelButtonText")}
    />
  );
}

TransactionModal.propTypes = {
  fromValue: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  toValue: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  fromOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  toOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};
