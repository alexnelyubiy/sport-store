import styled from "styled-components";

export const ConfirmButton = styled.button`
  margin-top: 25px;
  height: 40px;
  width: 360px;
  background: #87cefa;
  border: none;
  border: 2px solid grey;
  font-size: 18px;
  transition: line-height 0.5s ease; 
  text-transform: uppercase;
  :focus::-webkit-input-placeholder {
    color: transparent;
    outline: none;
    transition: line-height 0.5s ease; 
  }
  
  :focus:-ms-input-placeholder {
    color: transparent;
    outline: none;
    transition: line-height 0.5s ease; 
  }
  :focus {
    outline: none;
    transition: line-height 0.5s ease; 
  }
`;
