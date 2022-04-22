import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcons,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarStyled";

const NavBar = ({nav_items}) => {
  const navList = () => {
    const menu = nav_items
    const list = menu.map((menuItem) => {
      return (
        <NavItem key={menuItem}>
          <NavLinks to={menuItem.toLocaleLowerCase()}>{menuItem}</NavLinks>
        </NavItem>
      );
    });
    return list;
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Cashit</NavLogo>
          <MobileIcons>
            <FaBars />
          </MobileIcons>
          <NavMenu>{navList()}</NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
