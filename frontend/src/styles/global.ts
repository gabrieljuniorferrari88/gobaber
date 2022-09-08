import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #312E38;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family:'Roboto', sans-serif;
    font-size: 16px;
    color: #fff;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  /* #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */
  button {
    cursor: pointer;
  }
`
