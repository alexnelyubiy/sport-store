import pricesList, { initialPricesState } from './pricesList';

describe('Given the products reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let currentPricesState = initialPricesState;
    let newState;

    beforeEach(() => {
      newState = pricesList(currentPricesState, testAction);
    });

    describe('and the ADD_ITEM_PRICE action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_ITEM_PRICE';
        testAction.payload = { id: 1, price: 440 };
      });

      it('should return a new state with the provided prices list', () => {
        expect(newState).toEqual(currentPricesState.merge({ [testAction.payload.id]: testAction.payload.price }));
      });
    });

    describe('and the RESET_CART action is dispatched', () => {
      beforeAll(() => {
        currentPricesState = initialPricesState;
        testAction.type = 'RESET_CART';
      });

      it('should return a new state without removed product', () => {
        expect(newState).toEqual(initialPricesState);
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = undefined;
      });

      it('should return the current state', () => {
        expect(newState).toEqual(currentPricesState);
      });
    });
  });
});