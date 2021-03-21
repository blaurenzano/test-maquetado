import React, { useContext } from "react";
import { ShoesContext } from "../context/ShoesContext";
import styled from "styled-components";
import Shoe from "./Shoe";

const ChangeList = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
`;

const Shoes = ({ shoes, mobile }) => {
  const { showNumberKey } = useContext(ShoesContext);
  const [showNumber, setShowNumber] = showNumberKey;

  return (
    <div className="container">
      <ChangeList>
        Vista:{" "}
        {mobile ? (
          <div>
            <Button
              onClick={(e) => {
                setShowNumber(e.target.name);
              }}
              name={1}
            >
              1
            </Button>{" "}
            |
            <Button
              onClick={(e) => {
                setShowNumber(e.target.name);
              }}
              name={2}
            >
              2
            </Button>{" "}
          </div>
        ) : (
          <div>
            <Button
              onClick={(e) => {
                setShowNumber(e.target.name);
              }}
              name={2}
            >
              2
            </Button>{" "}
            |
            <Button
              onClick={(e) => {
                setShowNumber(e.target.name);
              }}
              name={3}
            >
              3
            </Button>{" "}
            |
            <Button
              onClick={(e) => {
                setShowNumber(e.target.name);
              }}
              name={4}
            >
              4
            </Button>
          </div>
        )}
        columnas
      </ChangeList>
      <div className="row">
        {shoes.map((item) => {
          return (
            <Shoe
              mobile={mobile}
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              showNumber={showNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
