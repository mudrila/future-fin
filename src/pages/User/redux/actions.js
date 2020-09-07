import {
  createCRUDActionTypes,
  createCRUDActionCreators,
  createBasicStateActionTypes,
  createBasicStateActionCreators
} from "../../../store/utils/actionUtils";

export const USER_ACTION_TYPES = createCRUDActionTypes("USER");
export const LOGIN_ACTION_TYPES = createBasicStateActionTypes("LOGIN");
export const LOGOUT_ACTION_TYPES = createBasicStateActionTypes("LOGOUT");

export const loginActionCreators = createBasicStateActionCreators(
  LOGIN_ACTION_TYPES
);
export const logoutActionCreators = createBasicStateActionCreators(
  LOGOUT_ACTION_TYPES
);
export const userActionCreators = createCRUDActionCreators(USER_ACTION_TYPES);
