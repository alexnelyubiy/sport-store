import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {reducer as formReducer} from 'redux-form';
import {
  products, initialProductsState, cart, initialCartState, pricesList, initialPricesState, initialUserState, user, initialFetchUserInfoState , fetchUserInfo
} from 'reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
 

const middleware = [logger, thunkMiddleware, promiseMiddleware()];

const enhancer = composeEnhancers(applyMiddleware( ...middleware ));

export const initialStoreState = Map({
  products: initialProductsState,
  cart: initialCartState,
  pricesList: initialPricesState,
  user: initialUserState,
  fetchUserInfo: initialFetchUserInfoState
});

const store = createStore(
  combineReducers({
    user,
    products,
    cart,
    pricesList,
    fetchUserInfo,
    formReducer
  }),
  initialStoreState,
  enhancer,
);

export default store;
