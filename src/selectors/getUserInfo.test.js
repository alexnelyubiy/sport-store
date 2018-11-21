import { initialStoreState } from 'store';
import getUserInfo from './getUserInfo';
import { Map } from "immutable";

describe('Given the getPrices selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getUserInfo(currentStoreState);
    });

    describe('and the user is in the store', () => {
      currentStoreState = initialStoreState.setIn(['fetchUserInfo'], Map({userId: "11"}));

      it('should return user from the store', () => {
        expect(result).toEqual(Map({userId: "11"}));
      });
    });
  });
});