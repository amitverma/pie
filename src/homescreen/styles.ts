import styled from 'styled-components';
import { Typography, Flex } from 'ds';

const SIDEBAR_WIDTH = 480;

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const JSONEditor = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.greyDarken(0.1)};
  min-width: ${SIDEBAR_WIDTH}px;
  max-width: ${SIDEBAR_WIDTH}px;
  height: calc(100vh - 64px);
  position: fixed;
  top: 64px;
  left: 0;
`;

export const SplitPane = styled(Flex)`
  height: 100%;
  padding-left: ${SIDEBAR_WIDTH}px;
`;

export const Badge = styled(Flex)`
  font-family: 'Courier New', monospace;
  color: ${({ theme }) => theme.colors.mediumGrey};
  border: 1px solid currentColor;
  font-size: 11px;
  line-height: 18px;
  height: 20px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const BackButton = styled(Flex).attrs({
  alignItems: 'center',
  justify: 'center',
})`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const ListWrapper = styled(Flex)`
  cursor: pointer;

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyDarken(0.1)};
  }

  &:not(:last-of-type) {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.greyDarken(0.2)};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.mediumGrey};
    svg,
    ${Typography}, ${Badge} {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
