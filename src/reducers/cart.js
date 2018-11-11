import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addProduct, removeProduct } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addProduct]: (state, action) => {
      const { payload } = action;
      return state.push(Map({ ...payload }));
    },
    [removeProduct]: (state, { payload }) => state.remove(state.findIndex(p => p.get('id') === payload))
  },
  initialCartState,
);
export default cart;
