// import {} from"./types";
// import initialState from "./state";

import { combineReducers } from 'redux';
import SearchReducer from './search/reducer';

const reducers = combineReducers({
  search : SearchReducer
});

export default reducers;
