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

const SideBar = ({ nav_items }) => {
  const sideItems = () => {
    const list = nav_items.map((item, i) => {
      return (
        <SideBarLink key={`${i}_item`} to={item.toLocaleLowerCase()}>
          {item}
        </SideBarLink>
      );
    });
    return list;
  };

  return (
    <>
      <SideBarContainer>
        <Icon>
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
