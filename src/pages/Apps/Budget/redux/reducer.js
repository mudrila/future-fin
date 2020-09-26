import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES
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
  },
  spendings: {
    loading: false,
    categories: [],
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
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.READ.SUCCESS:
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: payload.sources,
          loading: false
        }
      };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.SUCCESS:
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: [...state.incomes.sources, payload.newIncomeSource],
          loading: false
        }
      };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: state.incomes.sources.map((item) => {
            if (item._id === payload._id) {
              return payload.incomeSource;
            }
            return item;
          })
        }
      };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        incomes: {
          ...state.incomes,
          sources: state.incomes.sources.filter(
            (incomeSource) => incomeSource._id !== payload._id
          ),
          loading: false
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.READ.SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: payload,
          loading: false
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.CREATE.SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: [...state.accounts.items, payload],
          loading: false
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: state.accounts.items.map((item) => {
            if (item._id === payload._id) {
              return payload;
            }
            return item;
          })
        }
      };
    case BUDGET_ACCOUNTS_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          items: state.accounts.items.filter(
            (account) => account._id !== payload._id
          ),
          loading: false
        }
      };
    case BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.READ.SUCCESS:
      return {
        ...state,
        spendings: {
          ...state.spendings,
          categories: payload,
          loading: false
        }
      };
    case BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.CREATE.SUCCESS:
      return {
        ...state,
        spendings: {
          ...state.spendings,
          categories: [...state.spendings.categories, payload],
          loading: false
        }
      };
    case BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        spendings: {
          ...state.spendings,
          categories: state.spendings.categories.map((item) => {
            if (item._id === payload._id) {
              return payload;
            }
            return item;
          })
        }
      };
    case BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        spendings: {
          ...state.spendings,
          categories: state.spendings.categories.filter(
            (spendingCategory) => spendingCategory._id !== payload._id
          ),
          loading: false
        }
      };
    default:
      return state;
  }
}
