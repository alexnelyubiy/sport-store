import { createSelector } from 'reselect';

const getCartProducts = createSelector(state => state.get('cart'), cart => cart);

export default getCartProducts;

export const getProdSum = createSelector(getCartProducts, getCartProducts => getCartProducts.toJS().reduce((p,c) => p+c.price,0))

