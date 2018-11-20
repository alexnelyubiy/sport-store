import cart, { initialCartState } from './cart';

describe('Given the products reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let currentCartState = initialCartState;
    let newState;

    beforeEach(() => {
      newState = cart(currentCartState, testAction);
    });

    describe('and the ADD_PRODUCT action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_PRODUCT';
        testAction.payload = { id: 1 };
      });

      it('should return a new state with the provided product', () => {
        expect(newState).toEqual(currentCartState.push(testAction.payload.id));
      });
    });

    describe('and the RESET_CART action is dispatched', () => {
      beforeAll(() => {
        currentCartState = initialCartState;
        testAction.type = 'RESET_CART';
      });

      it('should return a new state without removed product', () => {
        expect(newState).toEqual(initialCartState);
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toBe(currentCartState);
      });
    });
  });
});