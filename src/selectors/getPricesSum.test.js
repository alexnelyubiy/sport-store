import { initialStoreState } from 'store';
import { fromJS } from 'immutable';
import getPricesSum from './getPricesSum';

describe('Given the getPricesSum selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getPricesSum(currentStoreState);
    });

    describe('and the pricesList is in the store', () => {
      beforeAll(() => {
        currentStoreState = initialStoreState.setIn(['pricesList'], fromJS({2: 20, 1: 30}));
      })
      
      it('should return the prices list sum from the store', () => {
        expect(result).toBe(50);
      });
    });
  });
});