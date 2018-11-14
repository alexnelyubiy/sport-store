import styled, { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% {
        transform: translateY(-800%);
    }
  50%{
      transform: translateY(10%);
  }
  65%{
      transform: translateY(-20%);
  }
  80%{
      transform: translateY(20%);
  }
  95%{
      transform: translateY(-10%);
  }           
  100% {
      transform: translateY(0%);
  }     
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  margin-bottom: 50px;
  overflow: hidden;
`;
export const ThanksWrapper = styled.div`
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
export const ThanksSpan = styled.span`
  margin-top: 70%;
  color: grey;
  font-size: 30px;
  animation-duration: 1.5s;
  animation-name: ${slideDown};
  visibility: visible !important;
  animation-timing-function: ease;
`;
