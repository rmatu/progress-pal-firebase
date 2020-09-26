import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.6;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

html{
  font-size: 80%;
  box-sizing: border-box;
  --leftSidebarBackground: ${(props) =>
    props.theme.colors.leftSidebarBackground}
  --mainContentBackground: ${(props) =>
    props.theme.colors.mainContentBackground}
  --rightSidebarBackground: ${(props) =>
    props.theme.colors.rightSidebarBackground}
  --inputBackground: ${(props) => props.theme.colors.inputBackground}
  --modalBackground: ${(props) => props.theme.colors.modalBackground}
  --primaryTextColor: ${(props) => props.theme.colors.primaryTextColor}
  --shadow: ${(props) => props.theme.colors.shadow}
  --specialTextColor: ${(props) => props.theme.colors.specialTextColor}
  --errorTextColor: ${(props) => props.theme.colors.errorTextColor}
  --successTextcolor: ${(props) => props.theme.colors.successTextColor}
  --headerBackground: ${(props) => props.theme.colors.headerBackground}


  @media ${(props) => props.theme.mediaQueries.smallest} {
      font-size: 60%;
    }


input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
  }

  a {
    text-decoration: none;

  }
}
`;
