import * as ActionTypes from "../actions/actionTypes";
const initialState = {
  isSignedIn: false,
  userId: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    default:
      return state;
  }
};

export default authReducer;
