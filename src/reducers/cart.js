import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addProduct, removeProduct } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addProduct]: (state, action) => {
      
      const { payload } = action;
      console.log("PAYLOAD" , payload)
      return state.push(payload.id);
    }
  },
  initialCartState,
);
export default cart;
