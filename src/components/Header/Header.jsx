import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, SCREEN_MEDIA_QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <TopLine />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side />
        <HeaderIcons>
          <Icon id='shopping-bag' />
          <Icon id='search' />
          <Icon id='menu' />
        </HeaderIcons>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const TopLine = styled.div`
  display: none;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: revert;

    background-color: ${COLORS.gray[900]};
    height: 4px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const HeaderIcons = styled.div`
  display: none;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${SCREEN_MEDIA_QUERIES.mobileAndSmaller} {
    display: flex;
    gap: 16px;
  }
`;

export default Header;
