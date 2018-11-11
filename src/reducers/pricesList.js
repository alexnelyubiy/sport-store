import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addItemPrice } from 'actions';
import { getProdSum } from 'selectors';

export const initialPricesState = Map({1: 0});

export const pricesList = handleActions(
  {
    [addItemPrice]: (state, action) => {
      const { id, price } = action.payload;
      console.log("store_prodSum", getProdSum)
      return state.merge({ [id]: price });
    },
  },
  initialPricesState,
);
export default pricesList;