import { createSelector } from 'reselect';

const getUserInfo = createSelector(state => state.get('fetchUserInfo'), fetchUserInfo => fetchUserInfo);

export default getUserInfo;
