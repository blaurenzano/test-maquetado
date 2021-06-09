import React, { useState } from "react";
import { MobileMenu, Button, SubContainer, Title } from "./style";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SideBar({ children }) {
  const [open, setOpen] = useState(false);

  function closeBurger() {
    setOpen(false);
  }

  function openBurger() {
    setOpen(true);
  }

  return (
    <SubContainer className="burgerContainer">
      <Button
        id="menu-button"
        aria-label="Menu"
        aria-controls="menu"
        aria-expanded={open}
        onClick={openBurger}
      >
        <GiHamburgerMenu />
      </Button>
      <MobileMenu isOpen={open} onClose={closeBurger} className="burgerMenu">
        <Button onClick={closeBurger}>
          <IoMdClose />
        </Button>
        <Title>
          <img src="/iconos/user-solid.svg" alt="user" />
          User
        </Title>
        {children}
      </MobileMenu>
    </SubContainer>
  );
}
