import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from '@radix-ui/react-dialog';

import { SCREEN_MEDIA_QUERIES, COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id='close' />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>

          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>

          <MobileNav>
            <MobileNavLink href='/sale'>Sale</MobileNavLink>
            <MobileNavLink href='/new'>New&nbsp;Releases</MobileNavLink>
            <MobileNavLink href='/men'>Men</MobileNavLink>
            <MobileNavLink href='/women'>Women</MobileNavLink>
            <MobileNavLink href='/kids'>Kids</MobileNavLink>
            <MobileNavLink href='/collections'>Collections</MobileNavLink>
          </MobileNav>

          <Footer>
            <FooterLink href='/terms'>Terms and Conditions</FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/contact'>Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${COLORS.white};

  width: max(min(300px, 80vw), 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: -6px;
  margin-right: -16px;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const MobileNavLink = styled.a`
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
