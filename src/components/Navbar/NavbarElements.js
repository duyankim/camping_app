import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  font-family: "Montserrat", sans-serif;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1920px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
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
    height: 20px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-inline-start: 0px;

  @media screen and (max-width: 914px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 20px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #a5a58d;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 5px;
  background: #ffb435;
  white-space: nowrap;
  padding: 5px 12px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #828960;
    color: #fff;
  }
`;
