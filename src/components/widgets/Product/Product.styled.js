import styled from "styled-components";

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 27%;
  height: 270px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background-color: #F5F5F5;
  margin: 20px;
  @media (max-width: 992px) {
    width: 30%;
  };
  @media (max-width: 768px) {
    width: 60%;
  };
  @media (max-width: 414px) {
    width: 80%;
  };
`;

export const ImageWrapper = styled.div`
  width: 220px;
`;

export const ImageProduct = styled.img`
  width: 100%;
`;