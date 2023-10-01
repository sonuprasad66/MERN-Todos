import * as types from "./actionTypes";
import axios from "axios";
import {
  CREATE_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO,
} from "../../Utils/Api";

const token = localStorage.getItem("token");

export const getTodos = (token) => (dispatch) => {
  dispatch({ type: types.GET_TODOS_REQUEST });
  return axios
    .get(GET_TODO, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return dispatch({
        type: types.GET_TODOS_SUCCESS,
        payload: res.data.todos,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GET_TODOS_FAILURE, payload: err });
    });
};

export const addTodos = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TODOS_REQUEST });
  return axios
    .post(
      CREATE_TODO,
      { title: payload },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      return dispatch({
        type: types.ADD_TODOS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_TODOS_FAILURE, payload: err });
    });
};

export const updateTodos =
  ({ todoId, status, title }) =>
  (dispatch) => {
    dispatch({ type: types.UPDATE_TODOS_REQUEST });
    return axios
      .patch(
        `${UPDATE_TODO}/${todoId}`,
        { status: status, title: title },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        return dispatch({
          type: types.UPDATE_TODOS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        return dispatch({ type: types.UPDATE_TODOS_FAILURE, payload: err });
      });
  };

export const deleteTodos = (todoId) => (dispatch) => {
  dispatch({ type: types.DELETE_TODOS_REQUEST });

  return axios
    .delete(`${DELETE_TODO}/${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.DELETE_TODOS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.DELETE_TODOS_FAILURE, payload: err });
    });
};

export const getCompletedStatus = (token) => (dispatch) => {
  dispatch({ type: types.GET_COMPLETED_STATUS_REQUEST });
  return axios
    .get(GET_TODO, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      const Cdata = res.data.todos.filter((res) => {
        return res.status === "completed";
      });
      return dispatch({
        type: types.GET_COMPLETED_STATUS_SUCCESS,
        payload: Cdata,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.GET_COMPLETED_STATUS_FAILURE,
        payload: err,
      });
    });
};
