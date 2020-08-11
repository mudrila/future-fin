import { getBasicCRUDResultShape } from "./utils";

// Budget Part
// Budget Incomes
export const BUDGET_INCOME_ACTION_TYPES = generateCRUDActionTypes(
  "BUDGET_INCOME"
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
  return {
    CREATE: {
      REQUEST: `CREATE_${prefix}_REQUEST`,
      LOADING: `CREATE_${prefix}_LOADING`,
      SUCCESS: `CREATE_${prefix}_SUCCESS`,
      ERROR: `CREATE_${prefix}_ERROR`
    },
    UPDATE: {
      REQUEST: `UPDATE_${prefix}_REQUEST`,
      LOADING: `UPDATE_${prefix}_LOADING`,
      SUCCESS: `UPDATE_${prefix}_SUCCESS`,
      ERROR: `UPDATE_${prefix}_ERROR`
    },
    READ: {
      REQUEST: `READ_${prefix}_REQUEST`,
      LOADING: `READ_${prefix}_LOADING`,
      SUCCESS: `READ_${prefix}_SUCCESS`,
      ERROR: `READ_${prefix}_ERROR`
    },
    DELETE: {
      REQUEST: `DELETE_${prefix}_REQUEST`,
      LOADING: `DELETE_${prefix}_LOADING`,
      SUCCESS: `DELETE_${prefix}_SUCCESS`,
      ERROR: `DELETE_${prefix}_ERROR`
    }
  };
}
