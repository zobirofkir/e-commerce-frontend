import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import LoginReducer from '../reducers/LoginReducer';
import RegisterReducer from '../reducers/RegisterReducer';
import ResetReducer from '../reducers/ResetReducer';
import OrderReducer from '../reducers/OrderReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  reset: ResetReducer,
  order: OrderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
