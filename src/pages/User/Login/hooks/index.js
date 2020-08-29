import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { userSelector } from "../../redux/selectors";
import useSecureRoute from "../../../../hooks/useSecureRoute";
import { loginActionCreators } from "../../redux/actions";
import formConfig from "../config/form";

export default function useLogin() {
  useSecureRoute();
  const { loading } = useSelector(userSelector);
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
    handleSubmit,
    loading
  };
}
