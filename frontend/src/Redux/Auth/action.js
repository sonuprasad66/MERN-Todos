import * as types from "./actionTypes";
import axios from "axios";
import { USER_LOGIN, USER_SIGNUP, USER_PROFILE } from "../../Utils/Api";

export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(USER_SIGNUP, payload)
    .then((res) => {
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    });
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(USER_LOGIN, payload)
    .then((res) => {
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

export const getProfile = (token) => async (dispatch) => {
  return await axios
    .get(USER_PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.USER_PROFILE_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
