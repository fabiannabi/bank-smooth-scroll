import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBtnWrapper,
  SideBarRoute,
  SideBarLink,
} from "./SideBarStyled";

const SideBar = ({ nav_items, isOpen, toggleView }) => {
  const sideItems = () => {
    const list = nav_items.map((item, i) => {
      return (
        <SideBarLink key={`${i}_item`} to={item.toLocaleLowerCase()} onClick={toggleView}>
          {item}
        </SideBarLink>
      );
    });
    return list;
  };

  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <Icon onClick={toggleView}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>{sideItems()}</SideBarMenu>
          <SideBtnWrapper>
            <SideBarRoute to="/">SIGN In</SideBarRoute>
          </SideBtnWrapper>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
