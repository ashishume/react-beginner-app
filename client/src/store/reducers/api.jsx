import * as ActionTypes from "../actions/actionTypes";
import _ from "lodash";
const initialState = {
  response: [],
  message:""
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_STREAM:
      return {
        ...state,
        response: action.payload
      };
    case ActionTypes.FETCH_STREAM:
      return {
        ...state,
        response: action.payload
      };
    case ActionTypes.FETCH_STREAMS:
      return {
        ...state,
        response:action.payload.result
      };
    case ActionTypes.EDIT_STREAM:
      return {
        ...state,
        message: action.payload
      };
    case ActionTypes.DELETE_STREAM:
      return {
        ...state,
        message:action.payload
      }
    default:
      return state;
  }
};

export default apiReducer;
