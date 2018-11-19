import addProduct from './addProduct';

describe('Given the addProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let index;

    beforeEach(() => {
      action = addProduct(index);
    });

    it('should have the ADD_PRODUCT type', () => {
      expect(action.type).toBe('ADD_PRODUCT');
    });

    describe('and index of a product is provided', () => {
      beforeAll(() => {
        index = 1;
      });

      it('should create a payload with the provided product index', () => {
        expect(action.payload).toBe(1);
      });
    });

    describe('and a index of a product is not provided', () => {
      beforeAll(() => {
        index = null;
      });

      it('should create a paylaod without the provided product index', () => {
        expect(action.payload).toBeNull();
      });
    });
  });
});