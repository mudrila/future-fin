import { LOGIN_ACTION_TYPES, USER_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  user: {
    isAuthenticated: false,
    name: "",
    email: "",
    token: "",
    loading: false,
    avatarUrl: ""
  }
};

export default function finPlanReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case LOGIN_ACTION_TYPES.LOADING:
    case USER_ACTION_TYPES.CREATE.LOADING:
    case USER_ACTION_TYPES.READ.LOADING:
    case USER_ACTION_TYPES.UPDATE.LOADING:
    case USER_ACTION_TYPES.DELETE.LOADING:
      return { ...state, loading: true };
    case LOGIN_ACTION_TYPES.SUCCESS:
      return { ...payload, isAuthenticated: true };
    case LOGIN_ACTION_TYPES.ERROR:
      return { ...state, loading: false };
    case USER_ACTION_TYPES.READ.SUCCESS:
      return { ...state, ...payload, loading: false };
    case USER_ACTION_TYPES.READ.ERROR:
      return { ...state, loading: false };
    case USER_ACTION_TYPES.UPDATE.SUCCESS:
      return { ...state, ...payload, loading: false };
    case USER_ACTION_TYPES.UPDATE.ERROR:
      return { ...state, loading: false };
    case USER_ACTION_TYPES.DELETE.SUCCESS:
      return { ...INITIAL_STATE.user };
    case USER_ACTION_TYPES.DELETE.ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
