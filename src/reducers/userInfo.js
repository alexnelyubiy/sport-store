import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addUser} from 'actions';

export const initialUserState = Map({});

const user = handleActions(
  {
    [addUser]: (state, action) => {
      return state.merge({ ...payload });
    },
  },
  initialUserState,
);
export default user;

