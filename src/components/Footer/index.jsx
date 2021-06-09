import React from "react";
import { Container, SubContainer, Title } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    "Ayuda",
    "Contacto",
    "Términos y condiciones",
    "Politicas de privacidad",
  ];

  const linksSearchs = () => {
    return links.map((name, i) => {
      return (
        <Link to="/sale" key={i}>
          <Title>{name}</Title>
        </Link>
      );
    });
  };

  return (
    <Container>
      <SubContainer>{linksSearchs()}</SubContainer>
    </Container>
  );
}
