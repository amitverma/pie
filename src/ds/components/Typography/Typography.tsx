import React from 'react';
import { Property } from 'csstype';

import { ds } from '../../lib';
import { TypographyWrapper } from './Typography.styles';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'warning'
  | 'success'
  | Property.Color;

export type TextAlign =
  | 'inherit'
  | 'initial'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export type FontWeight = 'light' | 'normal' | 'bold';

export type Ellipsis = {
  lines?: number;
  width?: string | number;
};

export interface TypographyProps extends React.HTMLAttributes<any> {
  children?: React.ReactNode;
  element?: React.ElementType;
  color?: TextColor;
  ellipsis?: Ellipsis;
  fontWeight?: FontWeight;
  italic?: boolean;
  block?: boolean;
  textAlign?: TextAlign;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'body3';
}

const Typography = ds<TypographyProps>(
  ({
    children,
    element = 'div',
    color,
    ellipsis,
    fontWeight = 'normal',
    italic,
    textAlign = 'inherit',
    variant = 'body1',
    block = false,
    ...props
  }) => {
    let normalizedElement = element;

    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
      normalizedElement = variant as React.ElementType<any>;
    }

    return (
      <TypographyWrapper
        as={normalizedElement}
        $color={color}
        $ellipsis={ellipsis}
        $block={block}
        $fontWeight={fontWeight}
        $italic={italic}
        $textAlign={textAlign}
        $variant={variant}
        {...props}
      >
        {children}
      </TypographyWrapper>
    );
  },
);

Typography.displayName = 'Typography';

export default Typography;
