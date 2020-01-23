import * as ActionType from "./actionTypes";
import streams from "../../api/postsApi";
import { API_NAME } from "../../api/apiName";
import history from "../../history";
export const signIn = userId => async dispatch => {
  dispatch({
    type: ActionType.SIGN_IN,
    payload: userId
  });
};
export const signOut = () => async dispatch => {
  dispatch({
    type: ActionType.SIGN_OUT
  });
};

//api calls

export const createStream = formValues => async dispatch => {
  const response = await streams.post(API_NAME.STREAMS, formValues);
  dispatch({
    type: ActionType.CREATE_STREAM,
    payload: response.data
  });
  if (response.status == 200) history.push("/");
};
export const fetchStreams = () => async dispatch => {
  const response = await streams.get(API_NAME.STREAMS);
  dispatch({
    type: ActionType.FETCH_STREAMS,
    payload: response.data
  });
};
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`${API_NAME.STREAMS}/${id}`);
  dispatch({
    type: ActionType.FETCH_STREAM,
    payload: response.data
  });
};
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(
    `${API_NAME.STREAMS}?threadId=${id}`,
    formValues
  );
  dispatch({
    type: ActionType.EDIT_STREAM,
    payload: response.data
  });
  if (response.status == 200) history.push("/");
};
export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`${API_NAME.STREAMS}?threadId=${id}`);
  dispatch({
    type: ActionType.DELETE_STREAM,
    payload: response.data
  });
  if (response.status == 200) history.push("/");
};
