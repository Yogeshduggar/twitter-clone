import React from 'react';
import AuthNav from './nav/AuthNav';
import BasicNav from './nav/BasicNav';
import { StyledHeader } from './style';
import { useUser } from 'context/UserContext';
import { StyledNavLink } from 'shared/components';
import { MainNav } from './nav/style';

const Header = () => {
  const user = useUser();

  return (
    <StyledHeader>
      <MainNav>
        <ul>
          <div className='logobox'>
          <img src="https://i.postimg.cc/x14drp0F/image.png" alt="download" height="50vh" />
          <h1>Tweeter Clone </h1>
          </div>
          {/* <StyledNavLink to="/profiles">ALL USERS</StyledNavLink> */}
          <div>{user ? <AuthNav /> : <BasicNav />}</div>
        </ul>
      </MainNav>
    </StyledHeader>
  );
};

export default Header;
