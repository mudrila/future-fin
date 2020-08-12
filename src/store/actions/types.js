import { getBasicCRUDResultShape } from "./utils";

// Budget Part
// Budget Incomes
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

export function generateCRUDActionTypes(prefix) {
  let actionTypesShape = getBasicCRUDResultShape();
  Object.keys(actionTypesShape).forEach((crudKey) => {
    Object.keys(actionTypesShape[crudKey]).forEach((stateKey) => {
      actionTypesShape[crudKey][stateKey] = `${crudKey}_${prefix}_${stateKey}`;
    });
  });
  return actionTypesShape;
}
