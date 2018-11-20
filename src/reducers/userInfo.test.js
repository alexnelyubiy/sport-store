import user, { initialUserState } from './userInfo';

describe('Given the products reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let currentUserState = initialUserState;
    let newState;

    beforeEach(() => {
      newState = user(currentUserState, testAction);
    });

    describe('and the ADD_USER action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_USER';
        testAction.payload = {firstName: "", lastName: "", city: "", postcode: "", phone: ""};
      });

      it('should return a new state with the provided user', () => {
        expect(newState).toEqual(currentUserState.merge({ ...testAction.payload }));
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = undefined;
      });

      it('should return the current state', () => {
        expect(newState).toEqual(currentUserState);
      });
    });
  });
});