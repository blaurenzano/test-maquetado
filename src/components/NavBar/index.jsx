import React from "react";
import { Container, SubContainer, TitleContainer, Title } from "./style";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export default function NavBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const userLinks = (
    <SubContainer className="userLinks">
      <Link to="/">
        <img src="/iconos/user-solid.svg" alt="user" />
      </Link>
      <Link to="/">
        <img src="/iconos/shopping-cart-solid.svg" alt="shopping-cart" />
      </Link>
    </SubContainer>
  );

  const userMobileLinks = (
    <SubContainer className="userLinks">
      <Link to="/">
        <img src="/iconos/shopping-cart-solid.svg" alt="shopping-cart" />
      </Link>
    </SubContainer>
  );

  return (
    <Container>
      {isDesktop ? (
        <>
          <SubContainer>
            <SubContainer className="logoContainer">
              <img src="/logo.svg" alt="LOGO" className="logo" />
            </SubContainer>
            <SubContainer className="userLinksContainer">
              {userLinks}
            </SubContainer>
          </SubContainer>
          <SubContainer className="links">
            <TitleContainer className="links">
              <Link to="/sale">
                <Title>Sale</Title>
              </Link>
              <Link to="/">
                <Title>E-shop</Title>
              </Link>
              <Link to="/">
                <Title>LookBook</Title>
              </Link>
              <Link to="/">
                <Title>Campaña</Title>
              </Link>
              <Link to="/">
                <Title>Locales</Title>
              </Link>
            </TitleContainer>
          </SubContainer>
        </>
      ) : (
        <>
          <SideBar>
            <TitleContainer className="links">
              <Link to="/sale">
                <Title>Sale</Title>
              </Link>
              <Link to="/">
                <Title>E-shop</Title>
              </Link>
              <Link to="/">
                <Title>LookBook</Title>
              </Link>
              <Link to="/">
                <Title>Campaña</Title>
              </Link>
              <Link to="/">
                <Title>Locales</Title>
              </Link>
            </TitleContainer>
          </SideBar>
          <SubContainer className="logoContainer">
            <img src="/logo.svg" alt="LOGO" className="logo" />
          </SubContainer>
          <SubContainer className="userLinksContainer">
            {userMobileLinks}
          </SubContainer>
        </>
      )}
    </Container>
  );
}
