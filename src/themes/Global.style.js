import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  //fonts
  --primary-clr: #fff;
  //bg
  --bg-primary: #0d0d0d;
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
