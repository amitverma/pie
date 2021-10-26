import { StyledProps } from '.';
import colors from './colors';

/**
 * This is to support the old styles of the marketing site.
 * We should remove this once we implement the new design.
 */

export interface TypographyProps extends StyledProps {
  fontWeight?: string;
}

export default {
  h1: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 56px;
    line-height: 64px;
  `,
  h2: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 40px;
    line-height: 48px;
  `,
  h3: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 32px;
    line-height: 42px;
  `,
  h4: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 24px;
    line-height: 32px;
  `,
  h5: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 20px;
    line-height: 24px;
  `,
  bodyPrimary: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 17px;
    line-height: 24px;
  `,
  bodySecondary: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 15px;
    line-height: 24px;
  `,
  bodyTertiary: (props?: TypographyProps): string => `
    font-weight: ${props?.fontWeight || 'normal'};
    font-size: 12px;
    line-height: 22px;
  `,
};
