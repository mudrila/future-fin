import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { userSelector } from "../../redux/selectors";
import useSecureRoute from "../../../../hooks/useSecureRoute";
import { userActionCreators } from "../../redux/actions";
import formConfig from "../config/form";

export default function useSignUp() {
  useSecureRoute();
  const { loading } = useSelector(userSelector);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
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
    loading
  };
}
