import styled, { css } from 'styled-components';

import { $ } from '../../theme';
import { ContainerProps } from './Container';

type WrapperProps = $<ContainerProps>;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${({ $fullWidth, $maxWidth, theme }) =>
    !$fullWidth &&
    css`
      max-width: ${$maxWidth || theme.dimensions.maxContainerWidth}px;
    `}
`;
