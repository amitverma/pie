import 'styled-components';

import { dsTheme, ThemeProviderPropsWithExtras } from '../theme';

declare module 'styled-components' {
  type Theme = typeof dsTheme;
  export interface DefaultTheme extends Theme, ThemeProviderPropsWithExtras {}
}
