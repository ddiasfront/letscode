import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    font-family: Ubuntu !important;
  }
  textarea { 
      resize: none;
  }
`;
 
export {GlobalStyle};