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
  ),

  mapProps(props => ({
    ...props,
    cartProducts: props.cartProducts.toJS()
  })),
);

export default enhance(CardScene);
