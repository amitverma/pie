import * as React from 'react';
import {
  render,
  RenderResult,
  Queries,
  RenderOptions,
} from '@testing-library/react';

import { AppThemeProvider } from './theme';

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({
  children,
}: AllTheProvidersProps) => <AppThemeProvider>{children}</AppThemeProvider>;

const customRender: (
  ui: React.ReactElement,
  options?: Omit<unknown, 'queries'> | undefined,
) => RenderResult<Queries, HTMLElement> = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
  // @ts-ignore
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
