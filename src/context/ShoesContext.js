import React from "react";
import * as data from "../products.json";

export const ShoesContext = React.createContext();

export const ShoesProvider = (props) => {
  const [shoes, setShoes] = React.useState(data.data);
  const [showNumber, setShowNumber] = React.useState(3);
  const [mobile, setMobile] = React.useState(false);

  return (
    <ShoesContext.Provider
      value={{
        shoesKey: [shoes, setShoes],
        showNumberKey: [showNumber, setShowNumber],
        mobileKey: [mobile, setMobile],
      }}
    >
      {props.children}
    </ShoesContext.Provider>
  );
};
