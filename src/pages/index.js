import React, {useState}from "react";
import NavBar from "../components/Navbar"
import SideBar from "../components/SideBar";

const NAV_ITEMS = ["About", "Discover", "Services", "Sign up"];

function Home() {
  const [isOpen, setOpen] = useState(false)
  const toggleView = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <SideBar nav_items={NAV_ITEMS} isOpen={isOpen} toggleView={toggleView} />
      <NavBar nav_items={NAV_ITEMS}  toggleView={toggleView}/>
    </>
  );
}

export default Home;
