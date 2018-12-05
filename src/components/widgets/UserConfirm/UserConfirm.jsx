import React from "react";
import PropTypes from "prop-types";
import { UserInfoWrap } from "../UserInfo/UserInfo.styled";

const displayName = "UserConfirm";

const propTypes = {};

function UserConfirm({values}) {
 
  return (
    <UserInfoWrap>
        <span>Full name: {values.fullName}</span>
        <span>City: {values.city}</span>
        <span>Email: {values.email}</span>
        <span>Phone: {values.phone}</span>
    </UserInfoWrap>
  );
}

UserConfirm.displayName = displayName;
UserConfirm.propTypes = propTypes;

export default UserConfirm;
