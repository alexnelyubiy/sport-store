import { createSelector } from 'reselect';

const getPrices = createSelector(state => state.get('pricesList'), pricesList => pricesList);

export default getPrices;


