import React, { useState } from "react";
import { MobileMenu, Button, SubContainer, Title } from "./style";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SideBar({ children }) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <SubContainer className="burgerContainer">
      <Button
        id="menu-button"
        aria-label="Menu"
        aria-controls="menu"
        aria-expanded={open}
        onClick={openModal}
      >
        <GiHamburgerMenu />
      </Button>
      <MobileMenu isOpen={open} onClose={closeModal} className="burgerMenu">
        <Button onClick={closeModal}>
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
