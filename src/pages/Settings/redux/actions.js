import {
  createCRUDActionTypes,
  createCRUDActionCreators
} from "../../../store/utils/actionUtils";

export const APP_SETTINGS_ACTION_TYPES = createCRUDActionTypes("APP_SETTINGS");
export const appSettingsActionCreators = createCRUDActionCreators(
  APP_SETTINGS_ACTION_TYPES
);
