import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { appSettingsSelector } from "../redux/selectors";
import { appSettingsActionCreators } from "../redux/actions";

export default function useSettingsPage() {
  const appSettings = useSelector(appSettingsSelector);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const loadAppSettingsAction = appSettingsActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(loadAppSettingsAction);
  }, []);
  return { ...appSettings };
}
