import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import createFormConfig from "../config/form";
import { appSettingsSelector } from "../redux/selectors";
import { appSettingsActionCreators } from "../redux/actions";

export default function useSettingsPage({
  financialProfileAllocationInputClassName
}) {
  const appSettings = useSelector(appSettingsSelector);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    settings: { defaultLanguage, defaultCurrency, financialProfileAllocation }
  } = appSettings;

  const formConfig = createFormConfig({
    defaultLanguage,
    defaultCurrency,
    financialProfileAllocation,
    financialProfileAllocationInputClassName
  });

  function handleSubmit({
    financialProfileAllocationSavings,
    financialProfileAllocationDebts,
    financialProfileAllocationInvestments,
    defaultCurrency,
    defaultLanguage
  }) {
    const updateSettingsAction = appSettingsActionCreators.UPDATE.REQUEST(
      {
        defaultCurrency: defaultCurrency.value,
        defaultLanguage: defaultLanguage.value,
        financialProfileAllocation: {
          savings: financialProfileAllocationSavings,
          debtsPayout: financialProfileAllocationDebts,
          investments: financialProfileAllocationInvestments
        }
      },
      enqueueSnackbar
    );
    dispatch(updateSettingsAction);
  }

  useEffect(() => {
    const loadAppSettingsAction = appSettingsActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(loadAppSettingsAction);
  }, []);
  return { ...appSettings, formConfig, handleSubmit };
}
