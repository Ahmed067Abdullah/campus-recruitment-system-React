import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import studentsReducer from "./reducers/studentsReducer";
import companiesReducer from "./reducers/companiesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  companies: companiesReducer
});

const initializeStore = () => createStore( reducers, composeEnhancers( applyMiddleware( thunk ) ) );

export default initializeStore;
