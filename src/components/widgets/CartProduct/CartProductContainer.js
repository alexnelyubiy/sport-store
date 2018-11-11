import {
  compose, setDisplayName, withState, withHandlers, setPropTypes, mapProps, pure
} from 'recompose';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { addItemPrice } from 'actions';

export const enhance = compose(
  setDisplayName('CartProductContainer'),
  setPropTypes({
    product: PropTypes.object.isRequired
  }),
  connect(
    null,
    dispatch => bindActionCreators(
      {
        dispatchAddPrice: addItemPrice
      },
      dispatch,
    ),
  ),
  withState('count', 'setCount', 1),
  withHandlers({
    incrementCount: props => event => {
      event.preventDefault()
      if(props.count < 6) {
        let cuurentPrice = props.product.price + props.count * props.product.price
        props.setCount(props.count + 1)
        props.dispatchAddPrice({ id: props.product.id, price: cuurentPrice })
      }
    },
    decrementCount: props => event => {
      event.preventDefault()
      if(props.count > 1) {
        let cuurentPrice = props.count * props.product.price - props.product.price
        props.setCount(props.count - 1)
        props.dispatchAddPrice( {id: props.product.id, price: cuurentPrice} )
      }
    },
  }),
  mapProps(props => ({ 
    ...props
   })),
);

export default enhance(pure(CartProduct));
