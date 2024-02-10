import { createGlobalStyle } from "styled-components";
import  bg  from './img/bg.jpg';

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${bg});
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;

};

* {
  box-sizing: border-box;
};

ul{
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
};

p{
  list-style: none;
  text-decoration: none;
  color: white;
}
`;