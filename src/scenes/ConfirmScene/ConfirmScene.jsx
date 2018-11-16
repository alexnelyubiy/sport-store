import React from 'react';
import Master from 'scenes/Master';
import ConfirmProduct from "components/widgets/ConfirmProduct";
import UserConfirm from "components/widgets/UserConfirm";
import { ProductsWrapper } from "../ProductsScene/ProductsScene.styled";
import { TotalWrap } from "../CardScene/CardScene.styled";
import { ConfirmButton } from "components/controls";
import { ConfirmWrapper, ThanksSpan, ThanksWrapper } from "./ConfirmScene.styled";
import { NavLink } from 'react-router-dom'

const displayName = 'ConfirmScene';

function ConfirmScene({cartProducts, pricesSum, user, handleConfirm, isConfirm, handleResetCart, prices}) {
  return (
    <Master title="Confirmation">
      {!isConfirm ? (
        <ConfirmWrapper>
          <ProductsWrapper>
            {cartProducts.map(product => (
              <ConfirmProduct key={product.id} product={product} totalPrice={prices[product.id]} />
            ))}
          </ProductsWrapper>
          <TotalWrap>
            <span>Total price: {pricesSum}$</span>
          </TotalWrap>
          <UserConfirm user={user} />
          <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
        </ConfirmWrapper>
        ) : (
          <ProductsWrapper>
            <ThanksWrapper>
              <ThanksSpan>Thanks for your choice!</ThanksSpan>
              <NavLink to="/">
                <ConfirmButton onClick={handleResetCart}>Back to Store</ConfirmButton>
              </NavLink>
            </ThanksWrapper>
          </ProductsWrapper>
        )
      }
    </Master>
  );
}

ConfirmScene.displayName = displayName;

export default ConfirmScene;
