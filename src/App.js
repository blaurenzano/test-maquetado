import "./App.css";
import NavBar from "./components/NavBar";
import Shoes from "./components/Shoes";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import React, { useContext } from "react";
import { ShoesContext } from "./context/ShoesContext";

function App() {
  const { mobileKey, showNumberKey, shoesKey } = useContext(ShoesContext);
  const [mobile, setMobile] = mobileKey;
  const [showNumber, setShowNumber] = showNumberKey;
  const [shoes, setShoes] = shoesKey;

  React.useEffect(() => {
    if (window.innerWidth < 735) {
      setMobile(true);
      setShowNumber(1);
    }
  });

  return (
    <div>
      <NavBar mobile={mobile}></NavBar>
      <div className="container">
        <div className="d-flex flex-row">
          <Panel mobile={mobile}></Panel>
          <Shoes shoes={shoes} showNumber={showNumber}></Shoes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
