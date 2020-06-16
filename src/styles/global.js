import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/Zig-Zag.svg';

const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  box-sizing: border-box;
  }

  body {
	background: url(${background}) repeat center top;
	-webkit-font-smoothing: antialiased;
  }

  body, input, button {
	  font: 14px Roboto sans-serif;
  }

  #root {
	  max-width: 1020px;
	  margin: 0 auto;
	  padding: 0 20px 20px;
  }

  button {
	  cursor: pointer;
  }
`;

export default GlobalStyle;
