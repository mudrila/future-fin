import { getBasicCRUDResultShape, makeActionCreator } from "./utils";

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
