import React from "react";
import PropTypes from "prop-types";
import { Input, ConfirmButton } from "components/controls";
import { UserInfoWrap, UserInfoFrorm } from "./UserInfo.styled";

const displayName = "UserInfo";

const propTypes = {};

function UserInfo({handleSetUser, user}) {
  console.log("USER", user);
  return (
    <UserInfoWrap>
      <h2>Your info</h2>
      <UserInfoFrorm action="">
        <Input name="firstName" onChange={handleSetUser} placeholder="First Name" required />
        <Input name="lastName" onChange={handleSetUser} placeholder="Last Name" required />
        <Input name="city" onChange={handleSetUser} placeholder="City" required />
        <Input name="postcode" onChange={handleSetUser} placeholder="Postcode" required />
        <Input name="phone" onChange={handleSetUser} placeholder="Phone number" required />
        <ConfirmButton>Confirm</ConfirmButton>
      </UserInfoFrorm>
    </UserInfoWrap>
  );
}

UserInfo.displayName = displayName;
UserInfo.propTypes = propTypes;

export default UserInfo;
