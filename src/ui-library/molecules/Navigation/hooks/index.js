import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { userSelector } from "../../../../pages/User/redux/selectors";
import { logoutActionCreators } from "../../../../pages/User/redux/actions";
import ROUTES from "../../../../config/routes";

export default function useNavigation() {
  // TODO: Refactor this so Navigation items are passed outside instead of calculated inside.
  const router = useRouter();
  const { isAuthenticated } = useSelector(userSelector);
  const items = Object.values(
    isAuthenticated ? ROUTES.PROTECTED_ROUTES : ROUTES.PUBLIC_ROUTES
  ).map((route) => {
    if (route.PATH === router.route) {
      return {
        ...route,
        selected: true
      };
    } else {
      return route;
    }
  });
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function handleAccountMenuOpen(event) {
    setAccountMenuAnchorEl(event.target);
  }
  function handleAccountMenuClose(event) {
    setAccountMenuAnchorEl(null);
  }
  // TODO: Refactor this logic to lie not in Navigation hooks, but to be passed outside
  function handleLogout() {
    const logoutActionRequest = logoutActionCreators.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(logoutActionRequest);
  }

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
    items,
    isAuthenticated,
    accountMenuAnchorEl,
    handleAccountMenuOpen,
    handleAccountMenuClose,
    handleLogout
  };
}
