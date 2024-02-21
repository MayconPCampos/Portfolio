import React, { useState, useEffect } from "react";
import styled from "styled-components";
import brandLogoDark from "../../assets/images/logo.png";
import brandLogoLight from "../../assets/images/logo2.png";
import menuIcon from "../../assets/images/bars-solid.svg";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Header = styled.div`
  .nav-background {
    background-color: #fff;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);

    a {
      color: #333;
    }
  }
`;

const Brand = styled.div`
  margin-left: 15%;
  margin-top: 5px;
  cursor: pointer;

  img {
    width: 50px;
  }

  img:hover {
    width: 52px;
  }

  @media (max-width: 768px) {
    padding: 5%;
    transition: all 0.2s;
  }
`;

const MenuMobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 5%;
    cursor: pointer;

    img {
      width: 40px;
    }
  }
`;

const Navbar = styled.div`
  height: 93px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;

  @media (max-width: 768px) {
    background-color: #333;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 15%;
  column-gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: start;
    background-color: #333;
    padding: 0;
    margin: 0;
    height: 0;
    transition: height 1s;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

    &.open {
      height: 260px;
      transition: height 1s;
    }
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
    padding-top: 30px;
    font-size: 1.3rem;

    &:last-child {
      padding-bottom: 40px;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 100;
  font-size: 0.8rem;
  transition: all 0.9s;

  &:hover {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.9s;
    color: #a5a5a5;
  }

  @media (max-width: 768px) {
    a {
      color: #fff;
      font-size: 1rem;
    }
  }
`;

const MenuBar = ({ isBackgroundVisible, isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use routes URL params to create page navigation
  let pageId = useParams().id;
  let projectLocalLink = "/project/" + String(pageId) + "/#projects";
  let contactLocalLink = "/project/" + String(pageId) + "/#contact";

  return (
    <Header>
      <Navbar className={isBackgroundVisible ? "nav-background" : ""}>
        <MenuMobileIcon onClick={handleMenuToggle}>
          <img src={menuIcon} alt="" />
        </MenuMobileIcon>
        <Brand onClick={handleMenuToggle}>
          <a href="#home">
            <img
              src={isBackgroundVisible ? brandLogoLight : brandLogoDark}
              alt=""
            />
          </a>
        </Brand>
        {isHomePage ? (
          <NavList className={isMenuOpen ? "open" : ""}>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact me</NavLink>
            </NavItem>
          </NavList>
        ) : (
          <NavList className={isMenuOpen ? "open" : ""}>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={projectLocalLink}>My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={contactLocalLink}>Contact me</NavLink>
            </NavItem>
          </NavList>
        )}
      </Navbar>
    </Header>
  );
};

MenuBar.propTypes = {
  isScrolling: PropTypes.bool,
  isHomePage: PropTypes.bool,
};

export default MenuBar;
