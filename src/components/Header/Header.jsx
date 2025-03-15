import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, SCREEN_MEDIA_QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id='shopping-bag' />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id='search' />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
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
  overflow-x: auto;
  overflow-y: hidden;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
    height: 68px;
    padding: 16px 29px 16px 32px;
  }

  @media ${SCREEN_MEDIA_QUERIES.mobileAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 3.4vw - 0.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
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

const MobileActions = styled.div`
  display: none;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${SCREEN_MEDIA_QUERIES.mobileAndSmaller} {
    gap: 16px;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    transform: translateX(-2px);
  }

  @media ${SCREEN_MEDIA_QUERIES.mobileAndSmaller} {
    transform: translateX(-1px);
  }
`;

export default Header;
