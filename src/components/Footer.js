import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  bottom: 0;
  background-color: #100217e6;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const Option = styled.footer`
  color: white;
  margin: 1rem;
  margin-right: 2rem;
`;

const Footer = () => {
  return (
    <Foot>
      <Option>Ayuda</Option>
      <Option>Contacto</Option>
      <Option>Terminos y condiciones</Option>
      <Option>Politicas de privacidad</Option>
    </Foot>
  );
};

export default Footer;
