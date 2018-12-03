
import React from 'react';
import { mount } from 'enzyme';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { enhance } from './CardContainer';
import { getCartProducts, getPricesSum } from 'selectors';
import { List, Map } from 'immutable';

const testStore = configureStore([ thunkMiddleware ])(
  Map({
    products: List([Map({name: "Item1", price: 120, id: 1}), Map({name: "Item2", price: 20, id: 2})]),
    cart: List([1]),
    pricesList: Map({1: 120})
  })
);

describe('Given the CardContainer enhancer', () => {
  describe('when the enhancer is applied', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(createSink(props => providedProps = props));

      mount(
        <Provider store={ testStore }>
          <DummyContainer />
        </Provider>
      );
    });

    it('should pass provided properties', () => {
      expect(providedProps.cartProducts).toMatchObject(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.pricesSum).toBe(getPricesSum(testStore.getState()));
    });
  });
});