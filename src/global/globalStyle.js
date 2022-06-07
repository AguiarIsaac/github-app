import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #22212C;
    color: #837E9F;
  }

  a {
    text-decoration: none;
    color: #00FF00;
    font-weight: bold;
  }
`;
 
export default GlobalStyle;