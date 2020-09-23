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
    // Do not send "repeatPassword" field to BE, we already validated that.
    const { name, email, password } = formValues;
    const sentValues = {
      name,
      email,
      password
    };
    const signUpRequest = userActionCreators.CREATE.REQUEST(
      sentValues,
      enqueueSnackbar
    );
    dispatch(signUpRequest);
  }

  function validateForm(formValues) {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );
    const { password, repeatPassword } = formValues;
    let isValid = true;
    let errors = {};
    if (password !== repeatPassword) {
      isValid = false;
      errors["repeatPassword"] = t(
        "signUp:form.fields.repeatPassword.errorMessage"
      );
    }
    if (strongRegex.test(password)) {
      if (password.length < 8) {
        isValid = false;
        errors["password"] = t(
          "signUp:form.fields.password.errorMessage.toShortPassword"
        );
      }
    } else {
      isValid = false;
      errors["password"] = t(
        "signUp:form.fields.password.errorMessage.toWeakPassword"
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
