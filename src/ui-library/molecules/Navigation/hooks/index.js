import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../../../pages/User/redux/selectors";
import ROUTES from "../../../../config/routes";

export default function useNavigation() {
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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
    items
  };
}
