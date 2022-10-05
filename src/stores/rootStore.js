import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
export const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
);
