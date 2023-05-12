import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import { reducer as authReducer } from "./authentication/reducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
	authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
