import {
  createCRUDActionTypes,
  createCRUDActionCreators
} from "../../../../store/utils/actionUtils";

// Budget Income Sources
export const BUDGET_INCOME_SOURCES_ACTION_TYPES = createCRUDActionTypes(
  "BUDGET_INCOME_SOURCES"
);
// Budget Accounts
export const BUDGET_ACCOUNTS_ACTION_TYPES = createCRUDActionTypes(
  "BUDGET_ACCOUNTS"
);
// Budget Spending Categories
export const BUDGET_SPENDING_CATEGORIES_ACTION_TYPES = createCRUDActionTypes(
  "BUDGET_SPENDING_CATEGORIES"
);
// Budget Transaction
export const BUDGET_TRANSACTIONS_ACTION_TYPES = createCRUDActionTypes(
  "BUDGET_TRANSACTIONS"
);

export const budgetIncomesActionCreators = createCRUDActionCreators(
  BUDGET_INCOME_SOURCES_ACTION_TYPES
);
export const budgetAccountsActionCreators = createCRUDActionCreators(
  BUDGET_ACCOUNTS_ACTION_TYPES
);
export const budgetSpendingCategoriesActionCreators = createCRUDActionCreators(
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES
);
export const budgetTransactionsActionCreators = createCRUDActionCreators(
  BUDGET_TRANSACTIONS_ACTION_TYPES
);
