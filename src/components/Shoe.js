import React from "react";
import { Card } from "react-bootstrap";

const Shoe = ({ mobile, name, price, image, showNumber }) => {
  return (
    <Card
      border="light"
      className={`p-0 col-${
        parseInt(showNumber) === 3
          ? 3
          : parseInt(showNumber) === 2
          ? 4
          : parseInt(showNumber) === 4
          ? 2
          : 9
      }  ml-4 mr-4 outline-none`}
    >
      <Card.Img className="border-bottom" variant="top" src={image} />
      <Card.Body>
        <Card.Title className={`${mobile ? "h6" : ""}`}>{name}</Card.Title>
        <Card.Text>
          <b>${price}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Shoe;
