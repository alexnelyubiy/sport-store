import { createSelector } from 'reselect';

const getProducts = createSelector(
  state => state.get('products'),
  (products, filter) => (filter
    ? products.filter(p => p
      .get('name')
      .toLowerCase()
      .includes(filter.toLowerCase()))
    : products),
);

export default getProducts;
