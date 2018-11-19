import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addItemPrice, resetCart } from 'actions';

export const initialPricesState = Map({1: 0});

export const pricesList = handleActions(
  {
    [addItemPrice]: (state, action) => {
      const { id, price } = action.payload;
      return state.merge({ [id]: price });
    },
    [resetCart]: (state, action) => {
      console.log("resetPrice111111111111111111111111111")
      return initialPricesState;
    }
  },
  initialPricesState,
);
export default pricesList;