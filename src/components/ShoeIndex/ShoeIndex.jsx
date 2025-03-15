import React from 'react';
import styled from 'styled-components';

import { SCREEN_MEDIA_QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <RightHeader>
            <MobileShoeBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileShoeBreadcrumbs>
            <Title>Running</Title>
          </RightHeader>
          <ShoeSelect>
            <Select label='Sort' value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </ShoeSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopShoeBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopShoeBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DesktopShoeBreadcrumbs = styled.div`
  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileShoeBreadcrumbs = styled.div`
  display: none;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: flex;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ShoeSelect = styled.div`
  @media ${SCREEN_MEDIA_QUERIES.mobileAndSmaller} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
