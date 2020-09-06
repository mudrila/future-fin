import { CRUD_KEYS } from "../../config";

const STATE_KEYS = ["REQUEST", "LOADING", "SUCCESS", "ERROR"];

export function makeActionCreator(actionType) {
  return function actionCreator(payload, enqueueSnackbar) {
    return {
      type: actionType,
      payload,
      enqueueSnackbar
    };
  };
}

export function generateBasicStateActionTypes(prefix) {
  let result = {};
  STATE_KEYS.forEach((stateKey) => {
    result[stateKey] = `${prefix}_${stateKey}`;
  });
  return result;
}

export function generateBasicStateActionCreators(actionTypes) {
  let result = {};
  Object.keys(actionTypes).forEach((actionTypeKey) => {
    result[actionTypeKey] = makeActionCreator(actionTypes[actionTypeKey]);
  });
  return result;
}

export function getBasicCRUDResultShape() {
  let result = {};
  CRUD_KEYS.forEach((crudKey) => {
    result[crudKey] = {};
    STATE_KEYS.forEach((stateKey) => {
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
