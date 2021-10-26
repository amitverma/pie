import styled, { css, StyledComponent, DefaultTheme } from 'styled-components';

export const dsArgTypes = {
  elevation: {
    control: {
      type: 'select',
      options: [0, 1, 2, 3],
    },
  },
  shimmer: {
    control: { type: 'boolean' },
  },
  margin: {
    type: 'json',
  },
  padding: {
    type: 'json',
  },
};

export interface DSProps {
  elevation?: 1 | 2 | 3;
  shimmer?: boolean;
  margin?: any;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: any;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const ds = <ComponentProps,>(
  el: (args: ComponentProps) => JSX.Element | null,
): StyledComponent<
  (props: ComponentProps & DSProps) => JSX.Element | null,
  DefaultTheme,
  ComponentProps & DSProps,
  never
> => styled((props: ComponentProps & DSProps) => {
  const {
    elevation,
    shimmer,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    ...normalizedProps
  } = props;

  // styled() will handle turning the result of invoking a function
  // component into an proper component.
  return el(normalizedProps as ComponentProps);
})<ComponentProps & DSProps>`
  ${({ elevation, theme }) =>
    !!elevation &&
    css`
      box-shadow: ${theme.elevations[elevation]};
    `}

  ${({ theme, margin, marginTop, marginBottom, marginLeft, marginRight }) => {
    const individualMargins = css`
      margin-top: ${!!marginTop &&
      (typeof marginTop === 'string'
        ? marginTop
        : `${theme.spacing(marginTop)}px`)};
      margin-bottom: ${!!marginBottom &&
      (typeof marginBottom === 'string'
        ? marginBottom
        : `${theme.spacing(marginBottom)}px`)};
      margin-left: ${!!marginLeft &&
      (typeof marginLeft === 'string'
        ? marginLeft
        : `${theme.spacing(marginLeft)}px`)};
      margin-right: ${!!marginRight &&
      (typeof marginRight === 'string'
        ? marginRight
        : `${theme.spacing(marginRight)}px`)};
    `;

    if (typeof margin === 'number')
      return css`
        margin: ${theme.spacing(margin)}px;
        ${individualMargins}
      `;

    if (typeof margin === 'string')
      return css`
        margin: ${margin};
        ${individualMargins}
      `;

    if (Array.isArray(margin))
      return css`
        margin: ${margin
          ?.map((value: number | string) =>
            typeof value === 'string' ? value : `${theme.spacing(value)}px`,
          )
          .join(' ')};
        ${individualMargins}
      `;

    return individualMargins;
  }}

  ${({
    theme,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  }) => {
    const individualPaddings = css`
      padding-top: ${!!paddingTop && `${theme.spacing(paddingTop)}px`};
      padding-bottom: ${!!paddingBottom && `${theme.spacing(paddingBottom)}px`};
      padding-left: ${!!paddingLeft && `${theme.spacing(paddingLeft)}px`};
      padding-right: ${!!paddingRight && `${theme.spacing(paddingRight)}px`};
    `;

    if (typeof padding === 'number')
      return css`
        padding: ${theme.spacing(padding)}px;
        ${individualPaddings}
      `;
    if (Array.isArray(padding)) {
      return css`
        padding: ${padding
          ?.map((value) => `${theme.spacing(value)}px`)
          .join(' ')};
        ${individualPaddings}
      `;
    }

    return individualPaddings;
  }}
`;

export default ds;
