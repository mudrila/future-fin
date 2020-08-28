import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { loginActionCreators } from "../../redux/actions";
import formConfig from "../config/form";

export default function useLogin() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
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
    handleSubmit
  };
}
