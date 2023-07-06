import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    body {
      background-color: #2B2B2B;
    }
  }

  @media screen and (min-width: 768px) {
    body {
      background-image: url("/images/rafael-leao-PzmmiWoJHA8-unsplash.jpg");
      background-size: cover;
      background-position: center center;
    }
  }

  
  `;
