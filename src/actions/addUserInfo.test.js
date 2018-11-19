import addUserInfo from './addUserInfo';

describe('Given the addProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let user;

    beforeEach(() => {
      action = addUserInfo(user);
    });

    it('should have the ADD_PRODUCT type', () => {
      expect(action.type).toBe('ADD_USER');
    });

    describe('and user is provided', () => {
      beforeAll(() => {
        user = {firstName: "", lastName: "", city: "", postcode: "", phone: ""};
      });

      it('should create a payload with the provided user', () => {
        expect(action.payload).toEqual(user);
      });
    });

    describe('and a index of a product is not provided', () => {
      beforeAll(() => {
        user = null;
      });

      it('should create a paylaod without the provided user', () => {
        expect(action.payload).toBeNull();
      });
    });
  });
});