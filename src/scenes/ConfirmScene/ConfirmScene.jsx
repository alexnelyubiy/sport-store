import React from 'react';
import PropTypes from 'prop-types';
import Master from 'scenes/Master';
import ConfirmProduct from "components/widgets/ConfirmProduct";
import UserConfirm from "components/widgets/UserConfirm";
import { ProductsWrapper } from "../ProductsScene/ProductsScene.styled";
import { TotalWrap } from "../CardScene/CardScene.styled";
import { ConfirmButton } from "components/controls";
import { ConfirmWrapper, ThanksSpan, ThanksWrapper } from "./ConfirmScene.styled";
import { NavLink } from 'react-router-dom'

const displayName = 'ConfirmScene';

const propTypes = {
  values: PropTypes.object.isRequired,
  cartProducts: PropTypes.array.isRequired,
  isConfirm: PropTypes.bool.isRequired,
  pricesSum: PropTypes.number.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleResetCart: PropTypes.func.isRequired,
  prices: PropTypes.object.isRequired
};

function ConfirmScene({values, cartProducts, pricesSum, handleConfirm, isConfirm, handleResetCart, prices}) {
  console.log("values", values)
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
          <UserConfirm values={values} />
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

ConfirmScene.PropTypes = propTypes;
ConfirmScene.displayName = displayName;

export default ConfirmScene;
