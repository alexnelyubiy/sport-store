import { createAction } from 'redux-actions';

const addProduct = createAction('ADD_PRODUCT', ( item ) => ( item ));

export default addProduct;
