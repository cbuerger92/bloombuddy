import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    margin-top: 25px;
    margin-bottom: 60px;
    font-family: ${roboto.style.fontFamily}, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e2e6d7;
    text-align: center;
    padding: 0 20px;
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
  }
`;
