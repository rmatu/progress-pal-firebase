import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap');

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
  --leftSidebarBackground: ${(props) => props.theme.leftSidebarBackground}
  --mainContentBackground: ${(props) => props.theme.mainContentBackgorund}
  --rightSidebarBackground: ${(props) => props.theme.rightSidebarBackground}
  --modalBackground: ${(props) => props.theme.modalBackground}
  --primaryTextColor: ${(props) => props.theme.primaryTextColor}
  --shadow: ${(props) => props.theme.shadow}
  --specialTextColor: ${(props) => props.theme.specialTextColor}
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

`;
