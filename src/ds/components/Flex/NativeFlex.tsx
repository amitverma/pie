import React from 'react';
import { ds } from '../../lib';

import { FlexProps } from './Flex';
import { FlexContainer } from './Flex.styles';

const NativeFlex = ds<FlexProps & { isNative: boolean }>(
  ({
    alignItems,
    alignContent,
    children,
    direction,
    gap,
    justify,
    wrap,
    isNative,
    ...props
  }) => (
    <FlexContainer
      $alignItems={alignItems}
      $alignContent={alignContent}
      $direction={direction}
      $gap={gap}
      $justify={justify}
      $isNative={isNative}
      $wrap={wrap}
      {...props}
    >
      {children}
    </FlexContainer>
  ),
);

NativeFlex.displayName = 'NativeFlex';

export default NativeFlex;
