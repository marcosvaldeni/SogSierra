import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --white: #ffffff;
  --black: #24292F;

  --gray-100: #9EB1C4;
  --gray-400: #718696;
  --gray-600: #2D4152;

  --purple: #f3ecf8;
  --purple: #CEB5E3;
  --purple: #BC91E1;
  --purple: #804ECA;
  --purple: #5908A1;

  --red-100: #FFD2D4;
  --red-400: #FF696D;

  --green-700: #BBEEE6;
  --green-700: #1CC4AB;
}

  html {
    font-size: 75%;
  }

  @media (min-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (min-width: 992px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 100%;
    }
  }

  body {
    min-height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
