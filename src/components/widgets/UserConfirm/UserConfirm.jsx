import React from "react";
import PropTypes from "prop-types";
import { UserInfoWrap } from "../UserInfo/UserInfo.styled";

const displayName = "UserConfirm";

const propTypes = {};

function UserConfirm({values}) {
 
  return (
    <UserInfoWrap>
        <span>First name: {values.username}</span>
        <span>Last name: {values.email}</span>
        <span>City: {values.age}</span>
    </UserInfoWrap>
  );
}

UserConfirm.displayName = displayName;
UserConfirm.propTypes = propTypes;

export default UserConfirm;
