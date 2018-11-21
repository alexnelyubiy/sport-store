import { createSelector } from 'reselect';
import getPrices from './getPrices';

const getPricesSum = createSelector(getPrices, getPrices => getPrices.reduce((w,v) => w+v, 0));

export default getPricesSum;