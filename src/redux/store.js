import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from './search/reducer';

const thunkApplied = applyMiddleware(thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(thunkApplied, devTools) : compose(thunkApplied);
const store = createStore( SearchReducer, appliedMiddleware);

export default store;
