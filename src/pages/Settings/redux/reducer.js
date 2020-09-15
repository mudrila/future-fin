import { APP_SETTINGS_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  loading: false,
  settings: {
    defaultCurrency: "USD",
    defaultLanguage: "en",
    financialProfileAllocation: {
      savings: 0.2,
      debtsPayout: 0.8,
      investments: 0
    }
  }
};

export default function appSettingsReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case APP_SETTINGS_ACTION_TYPES.READ.LOADING:
    case APP_SETTINGS_ACTION_TYPES.UPDATE.LOADING:
      return { ...state, loading: true };
    case APP_SETTINGS_ACTION_TYPES.READ.SUCCESS:
    case APP_SETTINGS_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        loading: false,
        settings: payload
      };
    case APP_SETTINGS_ACTION_TYPES.READ.ERROR:
    case APP_SETTINGS_ACTION_TYPES.UPDATE.ERROR:
      return {
        loading: false,
        ...state
      };
    default:
      return state;
  }
}
