import { initialStoreState } from 'store';
import getProducts from './getProducts';
import { List } from "immutable";
describe('Given the getProducts selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getProducts(currentStoreState);
    });

    describe('and the products is in the store', () => {
      currentStoreState = initialStoreState.setIn(['products'], List([{name: "Item 1", price: 20}, {name: "Item 2", price: 10}]));

      it('should return the products list from the store', () => {
        expect(result).toEqual(List([{name: "Item 1", price: 20}, {name: "Item 2", price: 10}]));
      });
    });
  });
});