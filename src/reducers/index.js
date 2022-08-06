import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";

export const rootReducer = combineReducers({ authReducer, postReducer });
