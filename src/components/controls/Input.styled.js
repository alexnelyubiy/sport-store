import styled from "styled-components";

export const Input = styled.input.attrs({
  // Every <PasswordInput /> should be type="password"
  required: "true"
})`
  margin-top: 25px;
  height: 30px;
  width: 360px;
  background: none;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 18px;
  transition: line-height 0.5s ease;
  @media (max-width: 414px) {
    width: 310px;
  }; 
  :focus::-webkit-input-placeholder {
    color: transparent;
    outline: none;
  }
  
  :focus:-ms-input-placeholder {
    color: transparent;
    outline: none;
  }
  :focus {
    outline: none;
  }
`;
