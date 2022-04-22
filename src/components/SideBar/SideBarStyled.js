import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: all 0.3 ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : 0)}; */
  /* top: ${({ isOpen }) => (isOpen ? 0 : "-100%")}; */
  top: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: position;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;

    transition: 0.2 ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;

  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;

  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
