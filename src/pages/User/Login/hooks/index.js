import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { userSelector } from "../../redux/selectors";
import { loginActionCreators } from "../../redux/actions";
import createFormConfig from "../config/form";

import { useTranslation } from "../../../../i18n";

export default function useLogin() {
  const { loading } = useSelector(userSelector);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formConfig = createFormConfig(t);
  const { formName, fields } = formConfig;

  function handleSubmit(formValues) {
    const loginRequest = loginActionCreators.REQUEST(
      formValues,
      enqueueSnackbar
    );
    dispatch(loginRequest);
  }

  return {
    formName,
    fields,
    handleSubmit,
    loading,
    t
  };
}
