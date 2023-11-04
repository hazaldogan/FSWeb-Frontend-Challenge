import { usersReducer } from "./usersReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  users: usersReducer,
});
