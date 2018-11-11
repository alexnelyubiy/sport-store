import { createSelector } from 'reselect';

const getPrices = createSelector(state => state.get('pricesList'), pricesList => pricesList);

export default getPrices;

export const getPricesSum = createSelector(getPrices, getPrices => Object.values(getPrices.toJS()).reduce((a, b) => a + b))
