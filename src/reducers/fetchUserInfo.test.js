import fetchUserInfo, { initialFetchUserInfoState } from './fetchUserInfo';

describe('Given the fetchUserInfo reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let newState;

    beforeEach(() => {
      newState = fetchUserInfo(initialFetchUserInfoState, testAction);
    });

    describe('and some action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'SOME_ACTION';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialFetchUserInfoState);
      });
    });

    describe('and some other action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'SOME_OTHER_ACTION';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialFetchUserInfoState);
      });
    });
  });
});