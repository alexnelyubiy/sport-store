import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map, List } from 'immutable';
import { getCartProducts, getUser, getPricesSum, getPrices } from 'selectors';
import { getFormValues } from 'redux-form/immutable';
import { handlers, enhance } from './ConfirmContainer';
import { initialStoreState } from 'store';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const testProps = {
	dispatchResetCart: jest.fn(),
	setConfirm: jest.fn()
};

describe('Given a handleConfirm handlers', () => {
	describe('when the handleConfirm is called', () => {

		beforeEach(() => {
			handlers.handleConfirm(testProps)();
		});

		it('should call the handleConfirm function', () => {
			expect(testProps.setConfirm).toHaveBeenCalledWith(true);
		});
	});

	describe('when the handleResetCart is called', () => {
		beforeEach(() => {
			handlers.handleResetCart(testProps)();
		});

		it('should call the dispatchResetCart function', () => {
			expect(testProps.dispatchResetCart).toHaveBeenCalled();
		});
  });
});

describe('Given a ConfirmContainer enhancer', () => {
	describe('when the enhancer is rendered', () => {
		let providedProps;

		beforeEach(() => {
			const DummyContainer = enhance(createSink(props => (providedProps = props)));

			mount(
				<Provider store={ testStore }>
					<DummyContainer />
				</Provider>
			);
		});

		it('should pass provided properties', () => {
      expect(providedProps.cartProducts).toMatchObject(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.user).toMatchObject(getUser(testStore.getState()).toJS());
      expect(providedProps.prices).toMatchObject(getPrices(testStore.getState()).toJS());
			expect(providedProps.pricesSum).toBe(getPricesSum(testStore.getState()));
			expect(providedProps.values).toMatchObject(getFormValues(testStore.getState()));
      expect(providedProps.dispatchResetCart).toBeInstanceOf(Function);
      expect(providedProps.handleConfirm).toBeInstanceOf(Function);
    });
	});
});