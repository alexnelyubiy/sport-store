import {
  compose, setDisplayName, withState, withHandlers, mapProps
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCart } from 'actions';
import { getCartProducts, getUser, getPricesSum } from 'selectors';
import ConfirmScene from './ConfirmScene';

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      user: getUser(state),
      cartProducts: getCartProducts(state),
      pricesSum: getPricesSum(state)
    }), dispatch => bindActionCreators(
      {
        dispatchResetCart: resetCart,
      },
      dispatch,
    ),
  ),
  withState("isConfirm", "handleConfirm", false),
  withHandlers({
    handleConfirm: ({ handleConfirm }) => () => {
      handleConfirm(true);
    },
    handleResetCart: ({ dispatchResetCart }) => {
      dispatchResetCart();
    }
  }),
  mapProps(props => ({
    ...props,
    user: props.user.toJS()
  })),
);

export default enhance(ConfirmScene);
