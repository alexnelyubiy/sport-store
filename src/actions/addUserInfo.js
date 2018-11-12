import { createAction } from 'redux-actions';

const addUser = createAction('ADD_USER', ( item ) => ( item ));

export default addUser;