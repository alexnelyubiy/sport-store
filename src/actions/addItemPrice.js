import { createAction } from 'redux-actions';

const addItemPrice = createAction('ADD_ITEM_PRICE', ( price ) => ( price ));

export default addItemPrice;
