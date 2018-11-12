import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  products, initialProductsState, filter, initialFilterState, cart, initialCartState, pricesList, initialPricesState, initialUserState, user, initialFetchUserInfoState , fetchUserInfo
} from 'reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
 

const middleware = [logger, thunkMiddleware, promiseMiddleware()];

const enhancer = composeEnhancers(applyMiddleware( ...middleware ));

export const initialStoreState = Map({
  filter: initialFilterState,
  products: initialProductsState,
  cart: initialCartState,
  pricesList: initialPricesState,
  user: initialUserState,
  fetchUserInfo: initialFetchUserInfoState
});

const store = createStore(
  combineReducers({
    user,
    filter,
    products,
    cart,
    pricesList,
    fetchUserInfo
  }),
  initialStoreState,
  enhancer,
);

export default store;
