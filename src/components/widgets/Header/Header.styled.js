import styled from "styled-components";

export const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  background-color: #87CEFA;
  position: relative;
`;

export const LogoWrapper = styled.div`
  width: 90px;
`;

export const BasketWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 15px;
  right: 15px;
  width: 30px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Basket = styled.img`
  width: 100%;
`;

export const ItemsCount = styled.span`
  font-size: 14px;
  text-decoration: none;
`;