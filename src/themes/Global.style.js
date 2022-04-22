import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  --brand-clr: #01bf71;
  //fonts
  --primary-clr: #fff;
  //bg
  --bg-primary: #0d0d0d;
}

* {
  box-sizing: border-box;
  font-family: 'Encode Sans Expanded', sans-serif;
  margin: 0;
  padding: 0;
}
`
