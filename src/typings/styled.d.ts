import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    leftSidebarBackground: string;
    mainContentBackgorund: string;
    rightSidebarBackground: string;
    modalBackground: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    specialTextColor: string;
    shadow: string;
  }
}
