import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, SCREEN_MEDIA_QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadcrumbs = ({ className }) => {
  return (
    <Breadcrumbs className={className}>
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
            <MobileShoeBreadcrumbs />
            <Title>Running</Title>
          </RightHeader>
          <Select label='Sort' value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopShoeBreadcrumbs />
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

const DesktopShoeBreadcrumbs = styled(ShoeBreadcrumbs)`
  @media ${SCREEN_MEDIA_QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileShoeBreadcrumbs = styled(ShoeBreadcrumbs)`
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
`;

const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
