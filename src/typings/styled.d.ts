import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    leftSidebarBackground: string;
    mainContentBackground: string;
    rightSidebarBackground: string;
    inputBackground: string;
    modalBackground: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    specialTextColor: string;
    shadow: string;
  }
}
