export function finPlanGoalsSelector(state) {
  return state.finPlan?.goals?.items;
}

export function finHealthSelector(state) {
  return state.finPlan.finHealth;
}
