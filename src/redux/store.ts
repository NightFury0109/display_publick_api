import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import logger from "redux-logger";

import apis from "./actions/apis";


const rootReducer = combineReducers({
  apis: apis
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;