
import React from 'react';
import { mount } from 'enzyme';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { enhance, handlers } from './CardContainer';
import { initialStoreState } from 'store';
import { getCartProducts, getPricesSum } from 'selectors';
import { List, Map } from 'immutable';
import { MemoryRouter } from 'react-router-dom';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const testProps = {
	history: { push: jest.fn() }
};

describe('Given a CardContainer handlers', () => {
	describe('when the handleConfirm is called', () => {

		beforeEach(() => {
      handlers.handleSubmit(testProps)();
      console.log("TESTPROPS.history", testProps.history)
		});

		it('should call the handleConfirm function', () => {
      expect(testProps.history.push.mock.calls[0]).toEqual(['/confirmation']);
		});
	});
});

describe('Given the CardContainer enhancer', () => {
  describe('when the enhancer is applied', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(createSink(props => providedProps = props));

      mount(
        <MemoryRouter>
          <Provider store={ testStore }>
            <DummyContainer />
          </Provider>
        </MemoryRouter>
        
      );
    });

    it('should pass provided properties', () => {
      expect(providedProps.cartProducts).toMatchObject(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.pricesSum).toBe(getPricesSum(testStore.getState()));
    });
  });
});