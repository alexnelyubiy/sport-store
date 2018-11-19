import { createAction } from 'redux-actions';

const addProduct = createAction('ADD_PRODUCT', index => index );

export default addProduct;
