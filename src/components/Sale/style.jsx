import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 600px) {
    flex-flow: row wrap;
  }
`;

const SubContainer = styled.div`
  display: flex;
  &.category {
    width: 30%;
    max-width: 415px;
    height: 100%;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: flex-start;
    padding-right: 16px;
    @media (max-width: 600px) {
      width: 100%;
      padding-right: 0;
    }
  }
  &.filterContainer {
    width: 260px;
    flex-flow: column nowrap;
    padding-top: 41px;
    hr {
      width: 95%;
      margin: 7.5px 0 16.5px;
      background-color: ${({ theme }) => theme.textColor};
    }
    @media (max-width: 600px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 0;
    }
  }
  &.products {
    width: 70%;
    max-width: 967px;
    height: 100%;
    flex-flow: row wrap;
    padding: 41px 39px 0 0;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 107px;
    @media (max-width: 600px) {
      width: 100%;
      padding: 0 0 0 0;
      justify-content: center;
      align-items: center;
      margin-top: 28px;
    }
  }

  &.searchInputContainer {
    width: 100%;
    flex-flow: row nowrap;
    height: auto;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: space-around;
    img {
      width: 22px;
    }
    input {
      width: 90%;
      margin-left: 0.5rem;
      margin-bottom: 0;
    }
    @media (max-width: 600px) {
      width: 95%;
      justify-content: space-between;
    }
  }
`;

const SelectMenu = styled(Accordion)`
  width: 260px;
  box-shadow: none !important;
  .MuiAccordionSummary-root {
    height: 29px !important;
    min-height: 29px;
    background-color: ${({ theme }) => theme.secondary};
    padding-left: 16px;
    margin: 0;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    height: 29px;
    min-height: 29px;
    margin: 0;
  }
  .MuiAccordionDetails-root {
    background-color: ${({ theme }) => theme.body};
    display: flex;
    flex-flow: column nowrap;
  }
  @media (max-width: 600px) {
    width: 95%;
    .MuiAccordionSummary-root {
      height: 46px !important;
      min-height: 40px;
    }
  }
`;

const ProductContainer = styled.div`
  width: 260px;
  height: 232px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 16px;
  margin-bottom: 32px;

  img {
    width: 260px;
    height: 182px;
    border-bottom: 1px solid #030b1c;
    margin-bottom: 8px;
  }
  :hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.48px;
  text-align: left;
  color: ${({ theme }) => theme.textColor};
  &.subTitle {
    width: 100%;
    height: 24px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.4px;
    margin-bottom: 14px;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  height: 22px;
  letter-spacing: 0.32px;
  font-size: 16px;
  text-align: left;
  color: ${({ theme }) => theme.textColor};
  &.categoryName {
    font-weight: bold;
  }
  &.price {
    font-weight: bold;
  }
`;

const Filter = styled.input`
  width: 100%;
  height: 22px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  /*Font*/
  letter-spacing: 0.32px;
  font-size: 16px;
  text-align: left;
  color: ${({ theme }) => theme.textColor};

  &.searchInput {
    cursor: default;
  }
  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    &.searchInput {
      cursor: default;
      height: 50px;
      width: 95%;
      font-size: 20px;
    }
  }
`;

export {
  Container,
  SubContainer,
  SelectMenu,
  ProductContainer,
  Title,
  Paragraph,
  Filter,
};
