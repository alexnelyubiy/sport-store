import { createSelector } from 'reselect';

const getPrices = createSelector(state => state.get('pricesList'), pricesList => pricesList);

export default getPrices;

export const getPricesSum = createSelector(getPrices, getPrices => getPrices.reduce((w,v) => w+v, 0))
