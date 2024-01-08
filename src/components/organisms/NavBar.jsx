import React, { useState } from "react";
import styled from "styled-components";
import brandImage from "../assets/code-solid.svg";
import menuBar from "../assets/bars-solid.svg";
import BreakpointSize from "../../styles/Breakpoints";

const NavBar = styled.div`
  height: 90px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-icon {
    display: none;
  }

  ul {
    display: flex;

    margin-left: auto;
    margin-right: 15%;
    column-gap: 100px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a:hover {
    color: #68c3a3;
  }

  .brand {
    margin-left: 15%;
    cursor: pointer;

    img {
      width: 40px;
    }
  }

  @media (max-width: ${BreakpointSize.md}px) {
    .brand {
      display: none;
    }

    .menu-icon {
      display: block;
      margin-left: 5%;
      cursor: pointer;

      img {
        width: 40px;
      }
    }

    ul {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      padding: 20px;
      display: none;
      margin: 0;
    }

    ul.open {
      display: flex;
    }

    li {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
  }
`;

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBar>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={menuBar} alt="" />
      </div>
      <div className="brand" onClick={handleMenuToggle}>
        <img src={brandImage} alt="" />
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <a href="#about-section">About me</a>
        </li>
        <li>
          <a href="#skill-section">Skills</a>
        </li>
        <li>
          <a href="#projects-section">My Projects</a>
        </li>
      </ul>
    </NavBar>
  );
};

export default MenuBar;
