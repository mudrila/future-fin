import { v4 as uuidv4 } from "uuid";
import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES
} from "./actions";

const INITIAL_STATE = {
  incomes: {
    loading: false,
    sources: [],
    items: []
  },
  accounts: {
    loading: false,
    items: []
  }
};

export default function budgetReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.READ.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.UPDATE.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.LOADING:
      return { ...state, incomes: { ...state.incomes, loading: true } };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.SUCCESS:
      const newSource = {
        ...payload,
        id: uuidv4() // Temp
      };
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: [...state.incomes.sources, newSource],
          loading: false
        }
      };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: state.incomes.sources.filter(
            (incomeSource) => incomeSource.id !== payload.id
          ),
          loading: false
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.CREATE.SUCCESS:
      const newAccount = {
        ...payload,
        id: uuidv4() // Temp
      };
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: [...state.accounts.items, newAccount],
          loading: false
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: state.accounts.items.filter(
            (account) => account.id !== payload.id
          ),
          loading: false
        }
      };
    default:
      return state;
  }
}
