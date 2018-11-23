import {
  compose, setDisplayName, mapProps
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCartProducts, getPricesSum } from 'selectors';
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
