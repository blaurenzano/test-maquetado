import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #100217e6;
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 100px;
  flex-direction: ${({ mobile }) => {
    return mobile ? "row" : "column";
  }};
`;
const Img = styled.img`
  width: 23px;
  margin-right: 0.4rem;
  float: right;
`;
const Title = styled.img`
  width: ${({ mobile }) => {
    return mobile ? "40%" : "13%";
  }};
  margin-top: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;

const MenuBtn = styled.div`
  display: none;
  margin: 1rem;
  background-color: #100217e6;
  width: 100vw;
  position: fixed;
  border-radius: 0.3rem;
  transform: translate(0px, 80px);
  h4 {
    color: white;
    padding-left: 1rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  h4 {
    color: white;
    margin-right: 7vw;
    margin-bottom: 1.5rem;
  }
  h4:last-child {
    margin-right: 0vw;
  }
`;

const NavBar = ({ mobile }) => {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const handleToggleMenu = () => {
    if (
      refMenuBtn.current.src ===
      "https://icongr.am/feather/menu.svg?size=64&color=ffffff"
    ) {
      refMenuBtn.current.src =
        "https://icongr.am/feather/x-circle.svg?size=64&color=ffffff";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.src =
        "https://icongr.am/feather/menu.svg?size=64&color=ffffff";
      refMenu.current.style.display = "none";
    }
  };
  if (mobile) {
    return (
      <Navbar mobile={mobile}>
        <Img
          onClick={handleToggleMenu}
          alt=""
          src="https://icongr.am/feather/menu.svg?size=64&color=ffffff"
          ref={refMenuBtn}
        ></Img>
        <Title mobile={mobile} alt="" src="assets/logo.svg"></Title>
        <MenuBtn ref={refMenu}>
          <h4>SALE</h4>
          <h4>E-SHOP</h4>
          <h4>LOOKBOOK</h4>
          <h4>CAMPAÑA</h4>
          <h4>LOCALES</h4>
        </MenuBtn>
        <Img alt="" src="assets/iconos/shopping-cart-solid.svg"></Img>
      </Navbar>
    );
  } else {
    return (
      <Navbar mobile={mobile}>
        <div>
          <div>
            <Title mobile={mobile} alt="" src="assets/logo.svg"></Title>
          </div>
          <Img alt="" src="assets/iconos/shopping-cart-solid.svg"></Img>
          <Img alt="" src="assets/iconos/user-solid.svg"></Img>
          <Img alt="" src="assets/iconos/search-solid.svg"></Img>
        </div>
        <Menu>
          <h4>SALE</h4>
          <h4>E-SHOP</h4>
          <h4>LOOKBOOK</h4>
          <h4>CAMPAÑA</h4>
          <h4>LOCALES</h4>
        </Menu>
      </Navbar>
    );
  }
};

export default NavBar;
