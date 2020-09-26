import { createCRUDSagaWatcher } from "../../../store/utils/sagaUtils";
import {
  APP_SETTINGS_ACTION_TYPES,
  appSettingsActionCreators
} from "./actions";
import { appSettingsRequests } from "./requests";

const appSettingsWatcher = createCRUDSagaWatcher({
  actionTypes: APP_SETTINGS_ACTION_TYPES,
  actionCreatorsFacade: appSettingsActionCreators,
  requestsHandlersFacade: appSettingsRequests,
  readIsList: false
});

export default appSettingsWatcher;
