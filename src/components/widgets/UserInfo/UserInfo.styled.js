import styled from "styled-components";

export const UserInfoWrap = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserInfoForm = styled.form.attrs({
  // we can define static props
  onSumbit: props => props.onSumbit
})`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
