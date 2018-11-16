import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/controls";
import { ProductItem, ImageWrapper, ImageProduct } from "./Product.styled";

const displayName = "Product";

const propTypes = {
  product: PropTypes.object.isRequired,
  handleAddProducts: PropTypes.func.isRequired
};

function Product({ product, handleAddProducts, isAdded }) {
  return (
    <ProductItem>
      <ImageWrapper>
        <ImageProduct src={product.url} alt="" />
      </ImageWrapper>
      <span>{product.name}</span>
      <span>{product.price}$</span>
      {!isAdded ? (
        <Button style={{ width: "50px", borderRadius: "5px" }} onClick={handleAddProducts} value="addProduct">
          Add
        </Button>
      ) : (
        <span>Item is added!</span>
      )}
    </ProductItem>
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
