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
