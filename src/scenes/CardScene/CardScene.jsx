import React from "react";
import Master from "scenes/Master";
import CartProductContainer from "components/widgets/CartProduct";
import UserInfoContainer from "components/widgets/UserInfo";
import UserForm from "components/widgets/UserForm";
import { ProductsWrapper } from "../ProductsScene/ProductsScene.styled";
import { TotalWrap } from "./CardScene.styled";

const displayName = "CardScene";

function CardScene({ handleSubmit, cartProducts, isCart, pricesSum }) {
  return (
    <Master title="Cart">
      <ProductsWrapper>
        {cartProducts.map(product => (
          <CartProductContainer key={product.id} isCart={isCart} product={product} />
        ))}
      </ProductsWrapper>
      <TotalWrap>
        {cartProducts.length !== 0 ? <span>Total price: {pricesSum}$</span> : <span>Your cart is empty</span>}
      </TotalWrap>
      {/* {
        cartProducts.length > 0 ? <UserInfoContainer /> : null
      } */}
      {
        cartProducts.length > 0 ? <UserForm onSubmit={handleSubmit}/> : null
      }
    </Master>
  );
}

CardScene.displayName = displayName;

export default CardScene;
