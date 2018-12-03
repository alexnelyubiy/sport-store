import {
  compose, setDisplayName, mapProps, withHandlers
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCartProducts, getPricesSum } from 'selectors';
import CardScene from './CardScene';

export const handlers = {
  handleSubmit: props => () => {
    // props.history.push('/confirmation');
    console.log("FUCK")
  }
}

export const enhance = compose(
  withRouter,
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      cartProducts: getCartProducts(state),
      pricesSum: getPricesSum(state)
    }), null
  ),
  withHandlers(handlers),
  mapProps(props => ({
    ...props,
    cartProducts: props.cartProducts.toJS()
  })),
);

export default enhance(CardScene);
