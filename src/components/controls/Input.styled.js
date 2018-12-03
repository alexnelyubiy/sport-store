import styled from "styled-components";

export const Input = styled.input.attrs({
  // we can define static props
  name: props => props.name,
  onChange: props => props.onChange,
  onBlur: props => props.onBlur,
  placeholder: props => props.placeholder,
  type: props => props.type,
  value: props => props.value,
  onFocus: props => props.onFocus
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
  :focus::placeholder {
    color: transparent;
    outline: none;
  }
  :focus {
    outline: none;
  }
`;
