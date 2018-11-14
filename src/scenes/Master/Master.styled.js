import styled from "styled-components";

export const MasterContainer = styled.div`
  width: 1180px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 992px;
  };
  @media (max-width: 992px) {
    width: 768px;
  };
  @media (max-width: 768px) {
    width: 560px;
  };
  @media (max-width: 560px) {
    width: 413px;
  }
  @media (max-width: 414px) {
    width: 310px;
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;
