import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

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
  heigth: 10px;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  align-items:center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weigth: bold:
  justify-self: flex-start;
  margin-left:24px;
  text-decoration: none;
`;
