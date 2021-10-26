import styled from 'styled-components';
import { Container, Flex } from 'ds';

export const AttributesContainer = styled(Container)`
  font-family: monospace;
  background: ${({ theme }) => theme.colors.grey};
`;

export const AttributesListItem = styled(Flex)`
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.greyDarken(0.1)};
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 16px;
      height: 100%;
      background: ${({ theme }) => theme.colors.greyDarken(0.1)};
      top: 0;
      left: -16px;
    }
  }
`;
