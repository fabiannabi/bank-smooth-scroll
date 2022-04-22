import NavBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import { ThemeProvider } from "styled-components";
import { MediasQ as mediaquery } from "./themes/MediasQ.js";
import { GlobalStyles} from "./themes/Global.style";

const NAV_ITEMS = ["About", "Discover", "Services", "Sign up"];
function App() {
  return (
    <ThemeProvider theme={mediaquery}>
      <GlobalStyles/>
        <Router>
          <SideBar nav_items={NAV_ITEMS} />
          <NavBar nav_items={NAV_ITEMS} />
        </Router>
    </ThemeProvider>
  );
}

export default App;
