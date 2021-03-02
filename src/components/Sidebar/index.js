import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRouteBtn,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarRoute to="/search" onClick={toggle}>
            Search on Map
          </SidebarRoute>
          <SidebarRoute to="/review" onClick={toggle}>
            Review
          </SidebarRoute>
          <SidebarRoute to="/register" onClick={toggle}>
            Sign Up
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouteBtn to="/login">Login</SidebarRouteBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
