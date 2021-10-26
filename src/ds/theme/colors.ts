import { lighten, darken, rgba, getContrast } from 'polished';

const textForBackground = (background = 'white'): string =>
  getContrast(background, '#292929') > 9 ? '#292929' : '#FFFFFF';

export default {
  black: '#000',
  blackLighten: (amount: number): string => lighten(amount, '#292929'),
  white: '#FFFFFF',
  grey: '#F4F4F4',
  mediumGrey: '#535353',
  darkGrey: '#3E3E3E',
  lightGrey: '#BFBFBF',
  greyLighten: (amount: number): string => lighten(amount, '#F4F4F4'),
  greyDarken: (amount: number): string => darken(amount, '#F4F4F4'),
  primary: '#1938D5',
  primaryLighten: (amount: number): string => lighten(amount, '#1938D5'),
  primaryDarken: (amount: number): string => darken(amount, '#1938D5'),
  secondary: '#96A5F3',
  secondaryLighten: (amount: number): string => lighten(amount, '#96A5F3'),
  secondaryDarken: (amount: number): string => darken(amount, '#96A5F3'),
  textPrimary: '#292929',
  textSecondary: '#949494',
  textTertiary: '#BFBFBF',
  textForBackground,
  warning: '#EB5757',
  warningLighten: (amount: number): string => lighten(amount, '#EB5757'),
  warningDarken: (amount: number): string => darken(amount, '#EB5757'),
  success: '#6FCF97',
  successLighten: (amount: number): string => lighten(amount, '#6FCF97'),
  successDarken: (amount: number): string => darken(amount, '#6FCF97'),
  info: '#FBB254',
  infoLighten: (amount: number): string => lighten(amount, '#FBB254'),
  infoDarken: (amount: number): string => darken(amount, '#FBB254'),
};
