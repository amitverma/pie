import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

import { $, StyledFunction } from '../../theme';

import { TypographyProps } from './Typography';

type WrapperProps = $<TypographyProps>;

const getTypographyStyles: StyledFunction<string> = ({
  $fontWeight,
  $variant,
  theme,
}) => {
  let normalizedVariant = $variant;

  if (normalizedVariant === 'body1') {
    normalizedVariant = 'bodyPrimary';
  } else if (normalizedVariant === 'body2') {
    normalizedVariant = 'bodySecondary';
  } else if (normalizedVariant === 'body3') {
    normalizedVariant = 'bodyTertiary';
  }

  return theme.typography[normalizedVariant]({ fontWeight: $fontWeight });
};

const getTypographyColor: StyledFunction<string> = ({ theme, $color }) => {
  switch ($color) {
    case 'primary':
      return theme.colors.textPrimary;
    case 'secondary':
      return theme.colors.textSecondary;
    case 'tertiary':
      return theme.colors.textTertiary;
    case 'error':
      return theme.colors.warning;
    case 'warning':
      return theme.colors.info;
    case 'success':
      return theme.colors.success;
    default:
      return $color ?? 'inherit';
  }
};

export const TypographyWrapper = styled.div<WrapperProps>`
  color: ${getTypographyColor};
  white-space: normal;
  ${getTypographyStyles};

  ${({ $ellipsis }) =>
    !!$ellipsis &&
    !!Object.keys($ellipsis).length &&
    css`
      ${ellipsis($ellipsis.lines)};
    `};

  ${({ $italic }) =>
    !!$italic &&
    css`
      font-style: italic;
    `};

  ${({ $textAlign }) =>
    !!$textAlign &&
    css`
      text-align: ${$textAlign};
    `};

  ${({ $block }) =>
    $block &&
    css`
      display: block;
    `};
`;
