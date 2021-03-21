import React from "react";

import Shoe from "./Shoe";

const Shoes = ({ shoes, showNumber }) => {
  return (
    <div className="row">
      {shoes.map((item) => {
        return (
          <Shoe
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            showNumber={showNumber}
          />
        );
      })}
    </div>
  );
};

export default Shoes;
