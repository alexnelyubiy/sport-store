import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialFetchUserInfoState = Map({ userId: '111111111' });

const fetchUserInfo = handleActions({}, initialFetchUserInfoState);

export default fetchUserInfo;