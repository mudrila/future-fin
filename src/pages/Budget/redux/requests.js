import { createCRUDRequests } from "../../../api/utils/requestUtils";

// Income Source
export const incomeSourceRequests = createCRUDRequests("/income-source");

export const budgetAccountRequests = createCRUDRequests("/budget-account");

export const spendingCategoriesRequests = createCRUDRequests(
  "/spending-category"
);

export const transactionRequests = createCRUDRequests("/transaction");
