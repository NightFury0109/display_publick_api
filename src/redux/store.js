import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import logger from "redux-logger";

import apis from ".//reducers/apisReducer";

let middleware = getDefaultMiddleware => getDefaultMiddleware();
// let middleware = getDefaultMiddleware => getDefaultMiddleware().concat(logger);


const rootReducer = combineReducers({
  apis: apis
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
