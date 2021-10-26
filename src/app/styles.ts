import styled from 'styled-components';
import { Flex, Typography } from 'ds';

export const AppHeader = styled(Flex)`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.black};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.appHeader};
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(4)}px;
  font-family: 'Georgia', serif;
`;

export const AppLogo = styled(Typography)`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.5px;
  cursor: pointer;
`;

export const Navigation = styled(Flex)`
  > * {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding-bottom: ${({ theme }) => theme.spacing(0.25)}px;
    transition: all 0.3s ease-out;
    font-family: Arial, Helvetica, sans-serif;
    ${({ theme }) => theme.typography.bodyTertiary()};
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-out;
    }
  }
`;

export const AppContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)}px;
`;
