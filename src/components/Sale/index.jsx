import React, { useState } from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import data from "../../assets/info/data.json";
import Fuse from "fuse.js";
import { IoMdClose } from "react-icons/io";
import {
  Container,
  SubContainer,
  SelectMenu,
  ProductContainer,
  Title,
  Paragraph,
  Filter,
} from "./style";

export default function Sale() {
  const products = data;
  const [searchCategory, setSearchCategory] = useState(null);
  const [searchSize, setSearchSize] = useState(null);
  const [searchColor, setSearchColor] = useState(null);
  const [querySearch, setQuerySearch] = useState();

  const categories = ["Zapatillas", "Botas", "Sandalias", "Pantuflas"];

  const sizes = ["35", "38", "40", "42", "44"];

  const colors = ["Amarillo", "Negro", "Verde", "Azul", "Blanco"];

  const options = {
    includeScore: false,
    threshold: 0.74,
    findAllMatches: true,
    ignoreLocation: true,
    keys: ["name", "categorie", "size-available", "color"],
  };

  const fuse = new Fuse(products, options);

  const result = fuse.search(
    querySearch + searchCategory + searchSize + searchColor
  );

  const resultMap =
    result.length > 0
      ? result.map((product, i) => {
          const item = product.item;
          return (
            <ProductContainer key={i}>
              <img src={item.image} alt={item.name} />
              <Paragraph>{item.name}</Paragraph>
              <Paragraph className="price">$ {item.price}</Paragraph>
            </ProductContainer>
          );
        })
      : products.map((item, i) => {
          return (
            <ProductContainer key={i}>
              <img src={item.image} alt={item.name} />
              <Paragraph>{item.name}</Paragraph>
              <Paragraph className="price">$ {item.price}</Paragraph>
            </ProductContainer>
          );
        });

  const getFilterCategory = () => {
    return categories.map((category, i) => {
      return (
        <Filter
          onClick={(e) => filterCategory(e)}
          key={i}
          value={category}
          type="button"
        />
      );
    });
  };

  const getFilterSize = () => {
    return sizes.map((size, i) => {
      return (
        <Filter onClick={(e) => filterSize(e)} value={size} type="button" />
      );
    });
  };

  const getFilterColor = () => {
    return colors.map((color, i) => {
      return (
        <Filter
          onClick={(e) => filterColor(e)}
          key={i}
          value={color}
          type="button"
        />
      );
    });
  };

  function filterCategory(e) {
    let value = e.target.value;
    if (value === searchCategory) {
      value = null;
    }
    setSearchCategory(value);
  }

  function filterSize(e) {
    let value = e.target.value;
    if (value === searchSize) {
      value = null;
    }
    setSearchSize(value);
  }

  function filterColor(e) {
    let value = e.target.value;
    if (value === searchColor) {
      value = null;
    }
    setSearchColor(value);
  }

  function clearFilters() {
    setSearchCategory(null);
    setSearchSize(null);
    setSearchColor(null);
  }

  return (
    <Container>
      <SubContainer className="category">
        <SubContainer className="filterContainer">
          <SubContainer className="searchInputContainer">
            <img src="/iconos/search-solid.svg" alt="search" />
            <Filter
              type="text"
              className="searchInput"
              placeholder="Search..."
              onChange={(e) => setQuerySearch(e.target.value)}
            />
            <IoMdClose
              size="24px"
              style={{ cursor: "pointer" }}
              title="Limpiar Filtros"
              onClick={clearFilters}
            />
          </SubContainer>
          <SubContainer className="filterContainer">
            {searchCategory !== null ? <Title>{searchCategory}</Title> : null}
            {searchSize !== null ? <Title>Talle: {searchSize} </Title> : null}
            {searchColor !== null ? <Title>Color: {searchColor}</Title> : null}
          </SubContainer>
          <hr />
          <Title className="subTitle">Filtrar</Title>
          <SelectMenu>
            <AccordionSummary aria-controls="panel1a-content">
              <Paragraph className="categoryName">Categorias</Paragraph>
            </AccordionSummary>
            <AccordionDetails>{getFilterCategory()}</AccordionDetails>
          </SelectMenu>
          <SelectMenu>
            <AccordionSummary aria-controls="panel1a-content">
              <Paragraph className="categoryName">Talle</Paragraph>
            </AccordionSummary>
            <AccordionDetails>{getFilterSize()}</AccordionDetails>
          </SelectMenu>
          <SelectMenu>
            <AccordionSummary aria-controls="panel1a-content">
              <Paragraph className="categoryName">Color</Paragraph>
            </AccordionSummary>
            <AccordionDetails>{getFilterColor()}</AccordionDetails>
          </SelectMenu>
        </SubContainer>
      </SubContainer>
      <SubContainer className="products">{resultMap}</SubContainer>
    </Container>
  );
}
