import React from "react";
import PropTypes from "prop-types";
import { ProductItem, ImageWrapper, ImageProduct } from "components/widgets/Product/Product.styled";

const displayName = "ConfirmProduct";

const propTypes = {
  product: PropTypes.object.isRequired,
  handleAddProducts: PropTypes.func.isRequired
};

function ConfirmProduct({ product, totalPrice }) {
  console.log("PRICEs");
  return (
    <ProductItem>
      <ImageWrapper>
        <ImageProduct src={product.url} alt="" />
      </ImageWrapper>
      <span>{product.name}</span>
      <span>Quantity: {totalPrice / product.price}</span>
      <span>Price: {totalPrice}$</span>
    </ProductItem>
  );
}

ConfirmProduct.displayName = displayName;
ConfirmProduct.propTypes = propTypes;

export default ConfirmProduct;
