import React from 'react';
import { StyledNavLink } from 'shared/components';
import { NavItem } from './style';

export default function BasicNav() {
  return (
    <>
      <NavItem>
        <StyledNavLink exact to="/">
          HOME
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink data-cy="nav-signin-link" to="/signin">
          SIGN IN
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink data-cy="nav-signup-link" to="/signup">
          SIGN UP
        </StyledNavLink>
      </NavItem>
    </>
  );
}
