import React, { useRef } from "react";

import styled from "styled-components";

const List = styled.li`
  list-style-type: none;
  margin: 0.2rem;
  width: 100%;
  &:first-child {
    background-color: #e4e8ee;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: ${({ mobile }) => {
    return mobile ? "none" : "block";
  }};
  position: ${({ mobile }) => {
    return mobile ? "fixed" : "static";
  }};
  background-color: white;
  margin: 2rem;
  z-index: 1;
  padding: ${({ mobile }) => {
    return mobile ? "2rem" : "0";
  }};
  width: ${({ mobile }) => {
    return mobile ? "80vw" : "100%";
  }};
  border-radius: 0.375rem;
  box-shadow: ${({ mobile }) => {
    return mobile ? "0 5px 10px 0 rgba(0, 0, 0, 0.15)" : "0";
  }};
`;
const Img = styled.img`
  position: fixed;
  width: 23px;
  margin-right: 0.4rem;
  float: left;
  margin-top: 50vh;
  z-index: 1;
`;

const Panel = ({ mobile }) => {
  let refMenuBtn = useRef();
  let refMenu = useRef();

  const handleToggleMenu = () => {
    if (
      refMenuBtn.current.src ===
      "https://icongr.am/fontawesome/angle-double-right.svg?size=58&color=70002d"
    ) {
      refMenuBtn.current.src =
        "https://icongr.am/fontawesome/angle-double-left.svg?size=58&color=70002d";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.src =
        "https://icongr.am/fontawesome/angle-double-right.svg?size=58&color=70002d";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      {mobile && (
        <Img
          onClick={handleToggleMenu}
          alt=""
          src="https://icongr.am/fontawesome/angle-double-right.svg?size=58&color=70002d"
          ref={refMenuBtn}
        ></Img>
      )}
      <Wrapper mobile={mobile} ref={refMenu}>
        <h4 className="border-bottom">
          <b>Zapatillas</b>
        </h4>

        <p>
          <b>Filtrar</b>
        </p>
        <ul className="list-group list-group-flush">
          <List>Categoria</List>
          <List>Zapatillas</List>
          <List>Zapatos</List>
          <List>Botas</List>
          <List>Sandalias</List>
          <List>Pantuflas</List>
        </ul>
        <ul className="list-group list-group-flush">
          <List>Talle</List>
          <List>36</List>
          <List>38</List>
          <List>40</List>
          <List>42</List>
          <List>44</List>
        </ul>
        <ul className="list-group list-group-flush">
          <List>Color</List>
          <List>Amarillo</List>
          <List>Negro</List>
          <List>Verde</List>
          <List>Azul</List>
          <List>Blanco</List>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Panel;
