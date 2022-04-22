import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  align-items: center;
  background: black;
  display: flex;
  font-size: 1rem;
  height: 80px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10px;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: flex-start;
  margin-left: 24px;
  text-decoration: none;
`;

export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;

  &:active {
    border-bottom: 3px solid #01bf71;
    color: #fff;
  }
`;

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #01bf71;
  border: none;
  border-radius: 50px;
  color: #010606;
  cursor: pointer;
  outline: none;
  padding: 20px 22px;
  text-decoration: none;
  transition: all 0.2 ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2 ease-in-out;
  }
`;
