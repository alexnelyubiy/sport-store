import {
  compose, setDisplayName, withState, withHandlers, mapProps
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCart } from 'actions';
import { getFormValues } from 'redux-form/immutable';
import { getCartProducts, getPricesSum, getPrices } from 'selectors';
import ConfirmScene from './ConfirmScene';

export const handlers = {
  handleConfirm: props => () => {
    props.setConfirm(true);
  },
  handleResetCart: props => () => {
    props.dispatchResetCart();
  }
}

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      values: getFormValues('syncValidation')(state),
      cartProducts: getCartProducts(state),
      pricesSum: getPricesSum(state),
      prices: getPrices(state)
    }), dispatch => bindActionCreators(
      {
        dispatchResetCart: resetCart,
      },
      dispatch,
    ),
  ),
  withState("isConfirm", "setConfirm", false),
  withHandlers(handlers),
  mapProps(props => ({
    ...props,
    values: props.values.toJS(),
    cartProducts: props.cartProducts.toJS(),
    prices: props.prices.toJS()
  })),
);

export default enhance(ConfirmScene);
