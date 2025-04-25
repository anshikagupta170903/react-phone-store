import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
<NavWrapper className="d-flex justify-content-between align-items-center px-sm-5">
{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-straight/css/uicons-bold-straight.css"
        ></link>
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav d-flex align-items-center justify-content-center flex-grow-1 m-0">
        <li className="nav-item mx-auto">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fi fi-bs-cart-minus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue) !important; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  .nav-link {
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .nav-item {
    list-style: none;
  }
`;
