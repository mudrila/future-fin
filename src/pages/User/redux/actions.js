import {
  generateCRUDActionTypes,
  generateCRUDActionCreators,
  generateBasicStateActionTypes,
  generateBasicStateActionCreators
} from "../../../store/utils/actionUtils";

export const USER_ACTION_TYPES = generateCRUDActionTypes("USER");
export const LOGIN_ACTION_TYPES = generateBasicStateActionTypes("LOGIN");
export const LOGOUT_ACTION_TYPES = generateBasicStateActionTypes("LOGOUT");

export const loginActionCreators = generateBasicStateActionCreators(
  LOGIN_ACTION_TYPES
);
export const logoutActionCreators = generateBasicStateActionCreators(
  LOGOUT_ACTION_TYPES
);
export const userActionCreators = generateCRUDActionCreators(USER_ACTION_TYPES);
