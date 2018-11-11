import React from 'react';
import PropTypes from 'prop-types';
import Master from 'scenes/Master';
import Product from 'components/widgets/Product';
import { ProductsWrapper } from './ProductsScene.styled'

const displayName = 'Master';

const propTypes = {
  title: PropTypes.string,
  myProducts: PropTypes.array.isRequired,
  handleAddProducts: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Products'
};

function ProductScene({
  myProducts, cartProducts
}) {
console.log("cart", cartProducts)
  return (
    <Master hasCart={true} itemsCount={cartProducts.length}>
      <ProductsWrapper>
        {myProducts.map(product => (
          <Product key={product.id} product={ product } />
        ))}
      </ProductsWrapper>
    </Master>
  );
}

ProductScene.displayName = displayName;
ProductScene.propTypes = propTypes;
ProductScene.defaultProps = defaultProps;

export default ProductScene;
