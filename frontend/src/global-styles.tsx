import { createGlobalStyle } from 'styled-components';
import { mainColors } from './design-system';
 
const GlobalStyle = createGlobalStyle`
body {
  background-color: #1e1e1e
}
  * {
    font-family: Ubuntu !important;
  }
  textarea { 
      resize: none;
  }
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  font-weight: 400;
`;
 
export {GlobalStyle};