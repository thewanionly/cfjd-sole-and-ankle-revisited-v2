import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from '@radix-ui/react-dialog';

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

          <Filler />

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
  background-color: var(--color-backdrop);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-white);

  width: max(min(300px, 80vw), 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const MobileNavLink = styled.a`
  font-size: 1.125rem;
  line-height: normal;
  font-weight: var(--weight-medium);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  line-height: normal;
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;
