import {
  compose, withState, withHandlers, setDisplayName, mapProps, withProps
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   fetchProducts
// } from 'actions';
import { getCartProducts, getPrices, getProdSum, getPricesSum } from 'selectors';
import CardScene from './CardScene';

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      cartProducts: getCartProducts(state),
      itemsPrices: getPrices(state),
      getProdSum: getProdSum(state),
      pricesSum: getPricesSum(state)
    }), null
    // dispatch => bindActionCreators(
    //   {
    //     // dispatchChangeFilter: changeFilter,
    //     // dispatchAddProduct: addProduct,
    //     // dispatchRemoveProduct: removeProduct,
    //     dispatchFetchProducts: fetchProducts,
    //   },
    //   dispatch,
    // ),
  ),
 
  // withState('totalPrice', 'setTotal', props => props.getProdSum),
  // withHandlers({
  //   handleTotal: (setTotalprops) => () => setTotal(pricesSum)
  // }),
  mapProps(props => ({
    ...props,
    cartProducts: props.cartProducts.toJS(),
    itemsPrices: props.itemsPrices.toJS()
  })),
);

export default enhance(CardScene);
