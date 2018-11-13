import { createSelector } from 'reselect';
//old
// const getCartProducts = createSelector(state => state.get('cart'), cart => cart);

// export default getCartProducts;

// export const getProdSum = createSelector(getCartProducts, getCartProducts => getCartProducts.toJS().reduce((p,c) => p+c.price,0))

//newSelector
const getCartProducts = createSelector(
  state => state.get('cart'),
  state => state.get('products'),
  state => state.get('pricesList'),
  (cart, products, pricesList) => {
    const cartItems = products.toJS().filter(product => cart.toJS().indexOf(product.id) !== -1);
    cartItems.map(item => (item.totalPrice = pricesList.toJS()[item.id]));
    console.log("getCart", cart.toJS() )
    return cartItems;
  },
);
export default getCartProducts;