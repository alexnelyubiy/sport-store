import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchProducts
} from 'actions';
import { getProducts, getCartProducts } from 'selectors';
import ProductsScene from './ProductsScene';

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      myProducts: getProducts(state),
      cartProducts: getCartProducts(state)
    }),
    dispatch => bindActionCreators(
      {
        // dispatchChangeFilter: changeFilter,
        // dispatchAddProduct: addProduct,
        // dispatchRemoveProduct: removeProduct,
        dispatchFetchProducts: fetchProducts,
      },
      dispatch,
    ),
  ),
  withHandlers({
    handleFetchProducts: ({ dispatchFetchProducts }) => () => {
      dispatchFetchProducts();
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.handleFetchProducts();
    }
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    cartProducts: props.cartProducts.toJS(),
  })),
);

export default enhance(ProductsScene);
