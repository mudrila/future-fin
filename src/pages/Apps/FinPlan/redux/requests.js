import {
  createCRUDRequests,
  baseRequest
} from "../../../../api/utils/requestUtils";

export const finPlanGoalsRequests = createCRUDRequests("/fin-plan/goal");

export async function getFinPlanHealth(payload) {
  return baseRequest({ url: "/fin-plan/health", method: "get", payload });
}
