import createFormConfig from "../../../config/transactionFormConfig";

import { useTranslation } from "../../../../../../i18n";

export default function useTransactionModal({
  fromValue,
  toValue,
  fromOptions,
  toOptions,
  onSubmit
}) {
  const { t } = useTranslation();
  const formConfig = createFormConfig({
    fromOptions,
    toOptions,
    fromValue,
    toValue,
    t
  });

  function handleSubmit(formValues) {
    onSubmit(formValues);
  }

  return {
    formConfig,
    handleSubmit,
    t
  };
}
