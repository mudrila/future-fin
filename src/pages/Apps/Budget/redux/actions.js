import {
  generateCRUDActionTypes,
  generateCRUDActionCreators
} from "../../../../store/utils/actionUtils";

// Budget Income Sources
export const BUDGET_INCOME_SOURCES_ACTION_TYPES = generateCRUDActionTypes(
  "BUDGET_INCOME_SOURCES"
);
// Budget Accounts
export const BUDGET_ACCOUNTS_ACTION_TYPES = generateCRUDActionTypes(
  "BUDGET_ACCOUNTS"
);
// Budget Spending Categories
export const BUDGET_SPENDING_CATEGORIES_ACTION_TYPES = generateCRUDActionTypes(
  "BUDGET_SPENDING_CATEGORIES"
);

export const budgetIncomesActionCreators = generateCRUDActionCreators(
  BUDGET_INCOME_SOURCES_ACTION_TYPES
);
export const budgetAccountsActionCreators = generateCRUDActionCreators(
  BUDGET_ACCOUNTS_ACTION_TYPES
);
export const budgetSpendingCategoriesActionCreators = generateCRUDActionCreators(
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES
);
