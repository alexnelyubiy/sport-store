import addItemPrice from './addItemPrice';

describe('Given the addItemPrice action', () => {
  let action;

  describe('when the action is called', () => {
    let price;

    beforeEach(() => {
      action = addItemPrice(price);
    });

    it('should have the ADD_ITEM_PRICE type', () => {
      expect(action.type).toBe('ADD_ITEM_PRICE');
    });

    describe('and price of a product is provided', () => {
      beforeAll(() => {
        price = {id: 1, price: 440};
      });

      it('should create a payload with the provided product price', () => {
        expect(action.payload).toEqual(price);
      });
    });

    describe('and a price of a product is not provided', () => {
      beforeAll(() => {
        price = null;
      });

      it('should create a paylaod without the provided product price', () => {
        expect(action.payload).toBeNull();
      });
    });
  });
});