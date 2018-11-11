import React from 'react';
import Master from 'scenes/Master';
import CartProductContainer from 'components/widgets/CartProduct';
import { ProductsWrapper } from '../ProductsScene/ProductsScene.styled'

const displayName = 'CardScene';

function CardScene({ itemsPrices, cartProducts, isCart, pricesSum, getProdSum }) {
  console.log("PRICEs", itemsPrices, pricesSum)
  return (
    <Master title="Card">
      <ProductsWrapper>
        {cartProducts.map(product => (
            <CartProductContainer key={product.id} isCart={isCart} product={ product } />
        ))}
      <span>Total price:{pricesSum}</span>
      </ProductsWrapper>
    </Master>
  );
}

CardScene.displayName = displayName;

export default CardScene;
