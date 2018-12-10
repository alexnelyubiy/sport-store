import styled from "styled-components";

export const Counter = styled.div`
  height: 20px;
  width: 60px;
  background-color: #87CEFA;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  display: flex;
`;

export const Decrement = styled.span`
  width: 40%;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

export const Increment = styled.span`
  width: 40%;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
export const ItemCount = styled.span`
  width: 20%;
  width: 16px;
  text-align: center;
  background-color: white!important;
`;