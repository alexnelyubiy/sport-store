import styled from "styled-components";

export const Button = styled.button`
  width: 70px;
  color: 	white;
  height: 20px;
  font-weight: 500;
  border: none;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { colorBase } }) => colorBase};
  transition: 0.3s ease;
  :hover {
    cursor: pointer;
    background: ${({ theme: { colorHover } }) => colorHover};
    transition: 0.3s ease;
  }
  :focus {
    outline: none;
  }
`;

