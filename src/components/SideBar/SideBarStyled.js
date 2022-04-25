import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.aside`
  align-items: center;
  background-color: var(--bg-primary);
  display: grid;
  height: 100%;
  left: 0;
  position: fixed;
  transition: all 0.5 ease-in;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : "-100%")};
  width: 100%;
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--primary-clr);
`;

export const Icon = styled.div`
  cursor: position;
  background: transparent;
  font-size: 2rem;
  outline: none;
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
`;

export const SideBarWrapper = styled.div`
  color: var(--primary-clr);
`;

export const SideBarLink = styled(LinkS)`
  align-items: center;
  color: var(--primary-clr);
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2 ease-in-out;

  &:hover {
    color: var(--brand-clr);
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

  @media screen and (max-width: ${({ theme }) => theme.mobile.small}) {
    grid-template-rows: repeat(6, 65px);
  }
`;

export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: var(--brand-clr);
  border: none;
  color: var(--bg-primary);
  cursor: pointer;
  outline: none;
  padding: 16px 64px;
  text-decoration: none;
  transition: all 0.2 ease-in-out;
  white-space: nowrap;

  &:hover {
    background: var(--primary-clr);
    color: var(--bg-primary);
    transition: 0.2 ease-in-out;
  }
`;
