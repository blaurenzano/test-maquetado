import React, { useRef, useContext } from "react";
import { ShoesContext } from "../context/ShoesContext";
import styled from "styled-components";
import * as data from "../products.json";

const List = styled.li`
  background-color: ${({ clean }) => {
    return clean ? "white" : "";
  }};
  list-style-type: none;
  margin: 0.2rem;
  width: 100%;
  cursor: pointer;
`;

const ListName = styled.li`
  list-style-type: none;
  background-color: #e4e8ee;
  font-weight: bold;
  cursor: pointer;
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
  const { shoesKey } = useContext(ShoesContext);
  const [shoes, setShoes] = shoesKey;
  const [cleanF, setCleanF] = React.useState(false);

  let refMenuBtn = useRef(),
    refMenu = useRef(),
    refCatBtn = useRef(),
    refCatMenu = useRef(),
    refSizeBtn = useRef(),
    refSizeMenu = useRef(),
    refColorBtn = useRef(),
    refColorMenu = useRef();

  const handleToggleMenuFilter = (btn, menu) => {
    if (btn.current.style.fontWeight === "normal") {
      btn.current.style.fontWeight = "bold";
      menu.current.style.display = "block";
    } else {
      btn.current.style.fontWeight = "normal";
      menu.current.style.display = "none";
    }
  };

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

  const handleFilter = (e, filterName, filter) => {
    e.target.style.backgroundColor = "#edf1f7";
    if (filterName === "type") {
      setShoes(
        shoes.filter((shoe) => {
          return shoe.type === filter;
        })
      );
    }
    if (filterName === "size") {
      setShoes(
        shoes.filter((shoe) => {
          return shoe.size.includes(filter);
        })
      );
    }
    if (filterName === "color") {
      setShoes(
        shoes.filter((shoe) => {
          return shoe.color.includes(filter);
        })
      );
    }
    setCleanF(false);
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
          <ListName
            ref={refCatBtn}
            onClick={() => handleToggleMenuFilter(refCatBtn, refCatMenu)}
          >
            Categoria
          </ListName>
          <div style={{ display: "block" }} ref={refCatMenu}>
            <List
              clean={cleanF}
              onClick={(e) => {
                handleFilter(e, "type", "zapatilla");
              }}
            >
              Zapatillas
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "type", "zapato")}
            >
              Zapatos
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "type", "bota")}
            >
              Botas
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "type", "sandalia")}
            >
              Sandalias
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "type", "pantufla")}
            >
              Pantuflas
            </List>
          </div>
        </ul>
        <ul className="list-group list-group-flush">
          <ListName
            ref={refSizeBtn}
            onClick={() => handleToggleMenuFilter(refSizeBtn, refSizeMenu)}
          >
            Talle
          </ListName>
          <div style={{ display: "block" }} ref={refSizeMenu}>
            <List clean={cleanF} onClick={(e) => handleFilter(e, "size", 36)}>
              36
            </List>
            <List clean={cleanF} onClick={(e) => handleFilter(e, "size", 38)}>
              38
            </List>
            <List clean={cleanF} onClick={(e) => handleFilter(e, "size", 40)}>
              40
            </List>
            <List clean={cleanF} onClick={(e) => handleFilter(e, "size", 42)}>
              42
            </List>
            <List clean={cleanF} onClick={(e) => handleFilter(e, "size", 44)}>
              44
            </List>
          </div>
        </ul>
        <ul className="list-group list-group-flush">
          <ListName
            ref={refColorBtn}
            onClick={() => handleToggleMenuFilter(refColorBtn, refColorMenu)}
          >
            Color
          </ListName>
          <div style={{ display: "block" }} ref={refColorMenu}>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "color", "yellow")}
            >
              Amarillo
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "color", "black")}
            >
              Negro
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "color", "green")}
            >
              Verde
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "color", "blue")}
            >
              Azul
            </List>
            <List
              clean={cleanF}
              onClick={(e) => handleFilter(e, "color", "white")}
            >
              Blanco
            </List>
          </div>
        </ul>
        <hr></hr>
        <List
          onClick={() => {
            setShoes(data.data);
            setCleanF(true);
          }}
        >
          Limpiar filtro
        </List>
      </Wrapper>
    </div>
  );
};

export default Panel;
