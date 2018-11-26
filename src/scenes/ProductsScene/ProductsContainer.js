import {
  compose, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions';
import { getProducts, getCartProducts } from 'selectors';
import ProductsScene from './ProductsScene';

export const handlers = {
  handleFetchProducts: ({ dispatchFetchProducts }) => () => {
    dispatchFetchProducts();
  },
};

export const enhance = compose(
  setDisplayName('ProductsContainer'),
  connect(
    state => ({
      products: getProducts(state),
      cartProducts: getCartProducts(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchFetchProducts: fetchProducts,
      },
      dispatch,
    ),
  ),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.handleFetchProducts();
    },
  }),
  mapProps(props => ({
    ...props,
    products: props.products.toJS(),
    cartProducts: props.cartProducts.toJS(),
  })),
);

export default enhance(ProductsScene);
