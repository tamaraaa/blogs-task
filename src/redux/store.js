import { createStore, applyMiddleware } from "redux";
import { blogReducer } from "./reducer";
import thunk from "redux-thunk";
import logger from 'redux-logger';


export default () => {
	const middlewares = [thunk, logger];
	return createStore(blogReducer, applyMiddleware(...middlewares));
};
