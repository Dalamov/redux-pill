import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from "./redux/reducer"

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  combineReducers({
    app: AppReducer
  }),
  applyMiddleware(
    thunk
  )
)
