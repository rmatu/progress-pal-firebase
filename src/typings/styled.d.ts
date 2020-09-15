import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      leftSidebarBackground: string;
      mainContentBackground: string;
      rightSidebarBackground: string;
      inputBackground: string;
      modalBackground: string;
      primaryTextColor: string;
      secondaryTextColor: string;
      specialTextColor: string;
      errorTextColor: string;
      successTextColor: string;
      shadow: string;
    };
    mediaQueries: {
      smallest: string;
      small: string;
      medium: string;
      large: string;
      largest: string;
    };
  }
}
