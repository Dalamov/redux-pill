import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from "./reducers";

// const reducers = combineReducers({
//   search: searchReducer
// });


const thunkApplied = applyMiddleware(thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(thunkApplied, devTools) : compose(thunkApplied);
const store = createStore( AppReducer, appliedMiddleware);

export default store;
