import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }


  p {
    padding: 0.5rem 0;

    color: #494c4d;
  }


  h2 {
      padding: 1rem 0;
      font-size: 1.4rem;
      font-weight: 300;
    }

    h3{
      padding: 1rem 0;
      font-size: 1.2rem;
      font-weight: 700;
    }
`;

export default GlobalStyle;
