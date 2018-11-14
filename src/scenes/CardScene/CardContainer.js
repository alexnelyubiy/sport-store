import {
  compose, withState, withHandlers, setDisplayName, mapProps, withProps
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   fetchProducts
// } from 'actions';
import { getCartProducts, getPrices, getPricesSum } from 'selectors';
import CardScene from './CardScene';

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      cartProducts: getCartProducts(state),
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
    ...props
  })),
);

export default enhance(CardScene);
