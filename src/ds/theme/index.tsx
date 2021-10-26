import * as React from 'react';
import {
  DefaultTheme,
  ThemedStyledProps,
  ThemeProvider,
} from 'styled-components';

import dimensions from './dimensions';
import elevations from './elevations';
import colors from './colors';
import GlobalStyle from './global';
import typography from './typography';
import zIndex from './zIndex';

export { default as GlobalStyle } from './global';
export * from './utils';

export const dsTheme = {
  colors,
  fonts: {
    main: 'Roboto, sans-serif',
  },
  dimensions,
  elevations,
  spacing: (x: number): number => x * 8,
  typography,
  zIndex,
};

export interface StyledProps extends Record<string, unknown> {
  theme: DefaultTheme;
  lines?: string | number | null | undefined;
  width?: string | number | void | null | undefined;
}

export type StyledFunction<T> = (
  props: ThemedStyledProps<any, DefaultTheme>,
) => T;

export interface ThemeProviderPropsWithExtras {
  children?: React.ReactNode;
  extras?: Record<string, unknown>;
}

export const AppThemeProvider: React.FC<ThemeProviderPropsWithExtras> = ({
  children,
}: ThemeProviderPropsWithExtras): JSX.Element => (
  <ThemeProvider theme={dsTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
