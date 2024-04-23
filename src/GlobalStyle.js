import { createGlobalStyle } from 'styled-components';
import bgimage from './services/images/rv.jpg';
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-style: normal;
    color: #101828;
  background-color: silver;
  min-height: 100vh;
  background-image: url(${bgimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  /* max-width: 100%; */
  height: auto;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button { cursor: pointer;}

h1, h2, h3, h4, h5, h6, p {
    margin: 0px; }

`;
