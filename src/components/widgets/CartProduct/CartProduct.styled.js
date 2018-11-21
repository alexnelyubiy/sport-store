import styled from "styled-components";

export const Counter = styled.div`
  height: 20px;
  width: 60px;
  background-color: #87CEFA;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
`;

export const Decrement = styled.span`
  width: 40%;
  border-right: 1px solid black;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

export const Increment = styled.span`
  width: 40%;
  border-left: 1px solid black;
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