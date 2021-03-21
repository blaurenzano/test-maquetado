import React from "react";
import { Card } from "react-bootstrap";

const Shoe = ({ id, name, price, image, showNumber }) => {
  return (
    <Card
      border="light"
      className={`col-${
        parseInt(showNumber) === 3
          ? 3
          : parseInt(showNumber) === 2
          ? 4
          : parseInt(showNumber) === 4
          ? 2
          : 6
      } m-4 outline-none`}
      style={{ width: "18rem" }}
    >
      <Card.Img
        style={{ width: "150%" }}
        className="border-bottom"
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b>${price}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Shoe;
