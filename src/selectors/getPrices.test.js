import { initialStoreState } from 'store';
import getPrices from './getPrices';

describe('Given the getPrices selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getPrices(currentStoreState);
    });

    describe('and the pricesList is in the store', () => {
      currentStoreState = initialStoreState.setIn(['pricesList'], {"2": 20});

      it('should return the prices list from the store', () => {
        expect(result).toEqual({"2": 20});
      });
    });
  });
});