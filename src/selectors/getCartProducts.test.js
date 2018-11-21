import { fromJS, List } from 'immutable';
import getCartProducts from './getCartProducts';

describe('Given the getProducts selector', () => {
  let currentStoreState = fromJS({
    products: [{ id: 1, name: '111' }, { id: 2, name: '222' }],
    cart: [1],
  });

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getCartProducts(currentStoreState);
    });

    describe('and the filter is specified in the store', () => {
      

      it('should return products from the store by the cart index', () => {
        expect(result.equals(fromJS([{ id: 1, name: '111' }]))).toBe(true);
      });
    });

    describe('and the is no cart index in the store', () => {
      beforeAll(() => {
        currentStoreState = currentStoreState.setIn(['cart'], []);
      });

      it('should return empty array from the store', () => {
        expect(result).toEqual(List([]));
      });
    });
  });
});