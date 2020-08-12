import { getBasicCRUDResultShape, makeActionCreator } from "./utils";
import {
  BUDGET_INCOME_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES
} from "./types";

function generateCRUDActionCreators(actionTypes) {
  let actionTypesShape = getBasicCRUDResultShape();
  Object.keys(actionTypesShape).forEach((crudKey) => {
    Object.keys(actionTypesShape[crudKey]).forEach((stateKey) => {
      actionTypesShape[crudKey][stateKey] = makeActionCreator(
        actionTypes[crudKey][stateKey]
      );
    });
  });
  return actionTypesShape;
}

export const budgetIncomesActionCreators = generateCRUDActionCreators(
  BUDGET_INCOME_ACTION_TYPES
);
export const budgetAccountsActionCreators = generateCRUDActionCreators(
  BUDGET_ACCOUNTS_ACTION_TYPES
);
export const budgetSpendingCategoriesActionCreators = generateCRUDActionCreators(
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES
);
