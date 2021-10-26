import { createGlobalStyle } from 'styled-components';
import { StyledProps } from '.';

import AeonikBoldItalicWoff2 from './fonts/aeonik/Aeonik-BoldItalic.woff2';
import AeonikBoldItalicWoff from './fonts/aeonik/Aeonik-BoldItalic.woff';
import AeonikBoldWoff2 from './fonts/aeonik/Aeonik-Bold.woff2';
import AeonikBoldWoff from './fonts/aeonik/Aeonik-Bold.woff';
import AeonikRegularItalicWoff2 from './fonts/aeonik/Aeonik-RegularItalic.woff2';
import AeonikRegularItalicWoff from './fonts/aeonik/Aeonik-RegularItalic.woff';
import AeonikLightItalicWoff2 from './fonts/aeonik/Aeonik-LightItalic.woff2';
import AeonikLightItalicWoff from './fonts/aeonik/Aeonik-LightItalic.woff';
import AeonikLightWoff2 from './fonts/aeonik/Aeonik-Light.woff2';
import AeonikLightWoff from './fonts/aeonik/Aeonik-Light.woff';
import AeonikRegularWoff2 from './fonts/aeonik/Aeonik-Regular.woff2';
import AeonikRegularWoff from './fonts/aeonik/Aeonik-Regular.woff';

import RobotoBoldItalicWoff2 from './fonts/roboto/Roboto-BoldItalic.ttf';
import RobotoBoldItalicWoff from './fonts/roboto/Roboto-BoldItalic.ttf';
import RobotoBoldWoff2 from './fonts/roboto/Roboto-Bold.ttf';
import RobotoBoldWoff from './fonts/roboto/Roboto-Bold.ttf';
import RobotoRegularItalicWoff2 from './fonts/roboto/Roboto-Italic.ttf';
import RobotoRegularItalicWoff from './fonts/roboto/Roboto-Italic.ttf';
import RobotoLightItalicWoff2 from './fonts/roboto/Roboto-LightItalic.ttf';
import RobotoLightItalicWoff from './fonts/roboto/Roboto-LightItalic.ttf';
import RobotoLightWoff2 from './fonts/roboto/Roboto-Light.ttf';
import RobotoLightWoff from './fonts/roboto/Roboto-Light.ttf';
import RobotoRegularWoff2 from './fonts/roboto/Roboto-Regular.ttf';
import RobotoRegularWoff from './fonts/roboto/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldItalicWoff2}) format('woff2'),
      url(${AeonikBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularItalicWoff2}) format('woff2'),
      url(${AeonikRegularItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikLightItalicWoff2}) format('woff2'),
      url(${AeonikLightItalicWoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikLightWoff2}) format('woff2'),
      url(${AeonikLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldItalicWoff2}) format('woff2'),
      url(${AeonikBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularItalicWoff2}) format('woff2'),
      url(${AeonikRegularItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }




  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalicWoff2}) format('woff2'),
      url(${RobotoBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldWoff2}) format('woff2'),
      url(${RobotoBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularItalicWoff2}) format('woff2'),
      url(${RobotoRegularItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalicWoff2}) format('woff2'),
      url(${RobotoLightItalicWoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightWoff2}) format('woff2'),
      url(${RobotoLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalicWoff2}) format('woff2'),
      url(${RobotoBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldWoff2}) format('woff2'),
      url(${RobotoBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularItalicWoff2}) format('woff2'),
      url(${RobotoRegularItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  *,
  &:after,
  &:before {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html,
  body {
    width: 100%;
    font-family: ${({ theme }): string => theme.fonts.main};
    overscroll-behavior: none;
  }

  body,
  p,
  a {
    ${(props: StyledProps): string =>
      props.theme.typography.bodyPrimary(props)}; 
    color: ${(props: StyledProps): string => props.theme.colors.textPrimary};
  }

  h1 {
    ${(props: StyledProps): string => props.theme.typography.h1(props)};
  }

  h2 {
    ${(props: StyledProps): string => props.theme.typography.h2(props)};
  }

  h3 {
    ${(props: StyledProps): string => props.theme.typography.h3(props)};
  }

  h4 {
    ${(props: StyledProps): string => props.theme.typography.h4(props)};
  }

  h5 {
    ${(props: StyledProps): string => props.theme.typography.h5(props)};
  }
`;
