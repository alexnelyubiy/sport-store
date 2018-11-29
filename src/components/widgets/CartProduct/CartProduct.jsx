import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/controls";
import { ProductItem, ImageWrapper, ImageProduct } from "components/widgets/Product/Product.styled";
import { Counter, Increment, Decrement, ItemCount } from "./CartProduct.styled";

const displayName = "CartProduct";

const propTypes = {
  product: PropTypes.object.isRequired,
  handleAddProducts: PropTypes.func.isRequired
};

function CartProduct({ product, count, incrementCount, decrementCount }) {
  console.log("PRICEs");
  return (
    <ProductItem>
      <ImageWrapper>
        <ImageProduct src={product.url} alt="" />
      </ImageWrapper>
      <span>{product.name}</span>
      <span>{product.price * count}$</span>
      <Counter>
        <Decrement data-name="minus" onClick={decrementCount}>-</Decrement>
        <ItemCount data-name={`${product.name}`}>{count}</ItemCount>
        <Increment data-name="plus" onClick={incrementCount}>+</Increment>
      </Counter>
      {/* <Button  value="addProduct">
          Remove 
        </Button> */}
    </ProductItem>
  );
}

CartProduct.displayName = displayName;
CartProduct.propTypes = propTypes;

export default CartProduct;
