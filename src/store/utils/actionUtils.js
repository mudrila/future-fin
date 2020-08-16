export function makeActionCreator(actionType) {
  return function actionCreator(payload) {
    return {
      type: actionType,
      payload
    };
  };
}

export function getBasicCRUDResultShape() {
  const crudKeys = ["CREATE", "UPDATE", "READ", "DELETE"];
  const stateKeys = ["REQUEST", "LOADING", "SUCCESS", "ERROR"];
  let result = {};
  crudKeys.forEach((crudKey) => {
    result[crudKey] = {};
    stateKeys.forEach((stateKey) => {
      result[crudKey][stateKey] = "";
    });
  });
  return result;
}

export function generateCRUDActionCreators(actionTypes) {
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

export function generateCRUDActionTypes(prefix) {
  let actionTypesShape = getBasicCRUDResultShape();
  Object.keys(actionTypesShape).forEach((crudKey) => {
    Object.keys(actionTypesShape[crudKey]).forEach((stateKey) => {
      actionTypesShape[crudKey][stateKey] = `${crudKey}_${prefix}_${stateKey}`;
    });
  });
  return actionTypesShape;
}
