import { baseRequest } from "../../../api/utils/requestUtils";

export function getFinPlanSchedule(payload) {
  return baseRequest({ method: "get", url: "/fin-plan/schedule", payload });
}
