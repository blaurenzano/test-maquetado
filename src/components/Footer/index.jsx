import React from "react";
import { Container, SubContainer, Title } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <SubContainer>
        <Title>Ayuda</Title>
        <Title>Contacto</Title>
        <Title>Términos y condiciones</Title>
        <Title>Politicas de privacidad</Title>
      </SubContainer>
    </Container>
  );
}
