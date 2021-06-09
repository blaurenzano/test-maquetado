import React from "react";
import { Container, SubContainer, Title } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <SubContainer>
        <Link to="/">
          <Title>Ayuda</Title>
        </Link>
        <Link to="/">
          <Title>Contacto</Title>
        </Link>
        <Link to="/">
          <Title>Términos y condiciones</Title>
        </Link>
        <Link to="/">
          <Title>Politicas de privacidad</Title>
        </Link>
        <Link to="/"></Link>
      </SubContainer>
    </Container>
  );
}
