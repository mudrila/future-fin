export function incomeSourcesSelector(state) {
  return state.budget.incomes.sources;
}

export function accountsSelector(state) {
  return state.budget.accounts.items;
}

export function spendingCategoriesSelector(state) {
  return state.budget.spending.categories;
}
