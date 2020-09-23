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

  function validateForm(formValues) {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );
    const { password } = formValues;
    let isValid = true;
    let errors = {};
    if (strongRegex.test(password)) {
      if (password.length < 8) {
        isValid = false;
        errors["password"] = t(
          "login:form.fields.password.errorMessage.toShortPassword"
        );
      }
    } else {
      isValid = false;
      errors["password"] = t(
        "login:form.fields.password.errorMessage.toWeakPassword"
      );
    }
    return { isValid, errors };
  }

  return {
    formName,
    fields,
    handleSubmit,
    loading,
    t,
    validateForm
  };
}
