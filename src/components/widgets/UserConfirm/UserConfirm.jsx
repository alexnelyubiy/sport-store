import React from "react";
import PropTypes from "prop-types";
import { UserInfoWrap } from "../UserInfo/UserInfo.styled";

const displayName = "UserConfirm";

const propTypes = {};

function UserConfirm({user}) {
 
  return (
    <UserInfoWrap>
        <span>First name: {user.firstName}</span>
        <span>Last name: {user.lastName}</span>
        <span>City: {user.city}</span>
        <span>Postcode: {user.postcode}</span>
        <span>Phone: {user.phone}</span>
    </UserInfoWrap>
  );
}

UserConfirm.displayName = displayName;
UserConfirm.propTypes = propTypes;

export default UserConfirm;
