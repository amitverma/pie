import * as React from 'react';

import { ds } from '../../lib';
import { Wrapper } from './Container.styles';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  maxWidth?: number;
}

const Container = ds<ContainerProps>(
  ({ fullWidth, maxWidth, children, ...props }) => {
    return (
      <Wrapper {...props} $fullWidth={fullWidth} $maxWidth={maxWidth}>
        {children}
      </Wrapper>
    );
  },
);

Container.displayName = 'Container';

export default Container;
