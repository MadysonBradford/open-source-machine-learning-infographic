import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *, *:before, *:after {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing: border-box;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   }
   body {
    background: #282c34;
   }
   #root{
       margin: 0 auto;
   }
`;