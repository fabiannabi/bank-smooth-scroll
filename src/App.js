import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MediasQ as mediaquery } from "./themes/MediasQ.js";
import { GlobalStyles } from "./themes/Global.style";
import Home from "./pages/index";

function App() {
  return (
    <ThemeProvider theme={mediaquery}>
      <GlobalStyles />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
