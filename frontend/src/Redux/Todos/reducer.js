import * as types from "./actionTypes";

const initialState = {
  todos: [],
  completedStatus: [],
  token: null,
  currentUser: {},
  isLoading: false,
  isError: false,
  isAuth: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODOS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };

    case types.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        todos: [],
      };

    case types.ADD_TODOS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload.todos,
      };

    case types.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.DELETE_TODOS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.DELETE_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.DELETE_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.UPDATE_TODOS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.UPDATE_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.UPDATE_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_COMPLETED_STATUS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_COMPLETED_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        completedStatus: payload,
      };

    case types.GET_COMPLETED_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        completedStatus: [],
      };

    default:
      return state;
  }
};
