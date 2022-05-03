import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  //fonts
  --primary-clr: #fff;
  --text-light: #f7f8fa;
  --text-dark: #010606;

  //bg
  --bg-primary: #0d0d0d;
  --bg-light: #f9f9f9;
  --bg-dark: #010606;
  --brand-clr: #01bf71;
  --bg-secondary: #232a34;
}

* {
  box-sizing: border-box;
  font-family: 'Encode Sans Expanded', sans-serif;
  margin: 0;
  padding: 0;
}
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
