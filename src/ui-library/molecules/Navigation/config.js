import ROUTES from "../../../config/routes";

import {
  HomeRounded,
  AccountBalanceWalletRounded,
  MonetizationOnRounded,
  DateRangeRounded,
  ExitToAppRounded,
  PersonAddRounded
} from "@material-ui/icons";

export const ICONS_MAP = {
  [ROUTES.PROTECTED_ROUTES.HOME.KEY]: HomeRounded,
  [ROUTES.PROTECTED_ROUTES.BUDGET_DASHBOARD.KEY]: AccountBalanceWalletRounded,
  [ROUTES.PROTECTED_ROUTES.FINPLAN_DASHBOARD.KEY]: MonetizationOnRounded,
  [ROUTES.PROTECTED_ROUTES.FINPLAN_SCHEDULE.KEY]: DateRangeRounded,
  [ROUTES.PUBLIC_ROUTES.LOGIN.KEY]: ExitToAppRounded,
  [ROUTES.PUBLIC_ROUTES.SIGN_UP.KEY]: PersonAddRounded
};
