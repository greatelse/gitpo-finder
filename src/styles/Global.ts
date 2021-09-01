import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./Theme";

type ThemeType = typeof lightTheme;
const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  button {
    cursor: pointer;
  }
  h1 {
    font-size: 20px;
  }
`;

export default GlobalStyles;
