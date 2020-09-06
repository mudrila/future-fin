import { generateCRUDRequests } from "../../../../api/utils/requestUtils";

// Income Source
export const incomeSourceRequests = generateCRUDRequests("/income-source");

export const budgetAccountRequests = generateCRUDRequests("/budget-account");

export const spendingCategoriesRequests = generateCRUDRequests(
  "/spending-categories"
);
