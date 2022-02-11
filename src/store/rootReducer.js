//create root reducer for reactjs
import { combineReducers } from "redux";
import { loginReducer } from "../comonents/login/loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
