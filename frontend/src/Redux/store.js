import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as TodosReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  TodosReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
