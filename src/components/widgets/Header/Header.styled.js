import styled from "styled-components";

export const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  flex: 0 0 auto;
  background-color: #87cefa;
  position: relative;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 90px;
  :hover {
    cursor: pointer;
  }
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
