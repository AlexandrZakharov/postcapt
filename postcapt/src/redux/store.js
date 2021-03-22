import {createStore, combineReducers, applyMiddleware} from 'redux';
import trendReducer from './reducers/trendReducer';
import posts from './reducers/posts';
import authReducer from './reducers/authReducer';
import thunkMiddleware from "redux-thunk";

const redusers = combineReducers({
  trendReducer, posts, authReducer
})

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

