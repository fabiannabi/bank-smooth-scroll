import React, {useState}from "react";
import NavBar from "../components/Navbar"
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { homeObj } from "../components/InfoSection/data";

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
      <Hero/>
      <InfoSection {...homeObj}/>
    </>
  );
}

export default Home;
