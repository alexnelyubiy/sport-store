import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { initialStoreState } from 'store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map, List } from 'immutable';
import { getProducts, getCartProducts, getUserInfo } from 'selectors';
import { handlers, enhance } from './ProductsContainer';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const testProps = {
  dispatchFetchProducts: jest.fn(),
};

describe('Given a ProductsContainer handlers', () => {
  describe('when the handleFetchProducts is called', () => {
    beforeEach(() => {
      handlers.handleFetchProducts(testProps)();
    });

    it('should call the dispatchFetchProducts function', () => {
      expect(testProps.dispatchFetchProducts).toHaveBeenCalled();
    });
  });
});

describe('Given a ProductsContainer enhancer', () => {
  describe('when the enhancer is rendered', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(createSink(props => (providedProps = props)));

      mount(
        <Provider store={testStore}>
          <DummyContainer />
        </Provider>,
      );
    });

    it('should pass provided properties', () => {
      expect(providedProps.cartProducts).toMatchObject(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.products).toMatchObject(getProducts(testStore.getState()).toJS());
      expect(providedProps.handleFetchProducts).toBeInstanceOf(Function);
    });
  });
});
