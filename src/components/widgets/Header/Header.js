import React from 'react';
import PropTypes from 'prop-types';
import logo from 'media/favicon.png';
import basket from 'media/basket.png';
import { AppHeader, LogoWrapper, BasketWrapper, Logo, Basket, ItemsCount } from "./Header.styled";
import { NavLink } from 'react-router-dom'

const displayName = 'Header';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  title: "Products"
};

function Header({
  title,
  hasCart,
  itemsCount
}) {
  return (
    <AppHeader>
      <LogoWrapper>
      <NavLink to='/'>
        <Logo src={logo} alt="" />
      </NavLink>
      </LogoWrapper>
        <h1>Sport Store {title}</h1>
      { hasCart ? (
        <BasketWrapper>
          <NavLink style={{"text-decoration": "none", "text-align":"right", "color": "grey"}} to='/cart'>
            <ItemsCount>{itemsCount}</ItemsCount>
            <Basket src={basket} alt="" />
          </NavLink>
        </BasketWrapper>
      ) : null 
      }
    </AppHeader>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
