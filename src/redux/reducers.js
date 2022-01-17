// import {} from"./types";
// import initialState from "./state";

import { combineReducers } from "redux";
import SearchReducer from "./search/reducer";
import FilterReducer from "./filters/reducer";


export default combineReducers({
  SearchReducer,
  FilterReducer
});
  