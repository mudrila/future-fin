import ROUTES from "../../../config/routes";

import {
  HomeRounded,
  AppsRounded,
  AccountBalanceWalletRounded,
  MonetizationOnRounded,
  DateRangeRounded
} from "@material-ui/icons";

export const ICONS_MAP = {
  [ROUTES.HOME.KEY]: HomeRounded,
  [ROUTES.APPS_DASHBOARD.KEY]: AppsRounded,
  [ROUTES.BUDGET_DASHBOARD.KEY]: AccountBalanceWalletRounded,
  [ROUTES.FINPLAN_DASHBOARD.KEY]: MonetizationOnRounded,
  [ROUTES.FINPLAN_SCHEDULE.KEY]: DateRangeRounded
};
