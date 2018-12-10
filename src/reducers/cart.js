import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addProduct, resetCart } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addProduct]: (state, action) => {
      const { payload } = action;
      return state.push(payload.id);
    },
    [resetCart]: () => {
      return initialCartState;
    }
  },
  initialCartState,
);
export default cart;
