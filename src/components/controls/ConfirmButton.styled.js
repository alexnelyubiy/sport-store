import styled from "styled-components";

export const ConfirmButton = styled.button.attrs({
  // we can define static props
  type: props => props.type,
  disabled: props => props.type
})`
  margin-top: 25px;
  height: 40px;
  width: 360px;
  background: #87cefa;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  color: white;
  border: none;
  font-size: 18px;
  transition: line-height 0.5s ease; 
  text-transform: uppercase;
  transition: 0.3s ease;
  @media (max-width: 414px) {
    width: 310px;
  };
  :hover {
    cursor: pointer;
    background: ${({ theme: { colorHover } }) => colorHover};
    transition: 0.3s ease;
  }
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
  :hover {
    cursor: pointer;
  }
`;
