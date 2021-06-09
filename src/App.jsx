import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TotalContainer, GlobalStyle, stylesThemes } from "./theme";
import NavBar from "./components/NavBar";
import Sale from "./components/Sale";
import Footer from "./components/Footer";

function App() {
  const theme = stylesThemes;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <TotalContainer id="outContainer">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Sale} />
            <Route exact path="/sale" component={Sale} />
          </Switch>
          <Footer />
        </TotalContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
