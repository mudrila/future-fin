import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { userSelector } from "../../redux/selectors";
import { userActionCreators } from "../../redux/actions";
import createFormConfig from "../config/form";

import { useTranslation } from "../../../../i18n";

export default function useSignUp() {
  const { loading } = useSelector(userSelector);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formConfig = createFormConfig(t);
  const { formName, fields } = formConfig;

  function handleSubmit(formValues) {
    const signUpRequest = userActionCreators.CREATE.REQUEST(
      formValues,
      enqueueSnackbar
    );
    dispatch(signUpRequest);
  }

  return {
    formName,
    fields,
    handleSubmit,
    loading,
    t
  };
}
