import { initialStoreState } from 'store';
import getUser from './getUser';
import { Map } from "immutable";
describe('Given the getPrices selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getUser(currentStoreState);
    });

    describe('and the user is in the store', () => {
      currentStoreState = initialStoreState.setIn(['user'], Map({firstName: "Peter", city: "Venice"}));

      it('should return user from the store', () => {
        expect(result).toEqual(Map({firstName: "Peter", city: "Venice"}));
      });
    });
  });
});