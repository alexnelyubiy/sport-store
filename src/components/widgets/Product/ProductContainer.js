import {
  compose, setDisplayName, withState, withHandlers, setPropTypes, mapProps, pure
} from 'recompose';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import {
  addProduct, addItemPrice
} from 'actions';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
    product: PropTypes.object.isRequired
  }),
  connect(
    null,
    dispatch => bindActionCreators(
      {
        dispatchAddProduct: addProduct,
        dispatchAddItemPrice: addItemPrice
      },
      dispatch,
    ),
  ),
  withState('isAdded', 'handleAdding', false),
  withHandlers({
    handleRemove: ({ id, onRemove }) => () => onRemove(id),
    handleAddProducts: ({ product, dispatchAddProduct, handleAdding, dispatchAddItemPrice }) => () => {
      dispatchAddProduct(product);
      dispatchAddItemPrice({ id: product.id, price: product.price } )
      handleAdding(true);
    }
  }),
  mapProps(props => ({ ...props })),
);

export default enhance(pure(Product));
