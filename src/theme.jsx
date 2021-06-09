import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'Roboto', sans-serif;
        src: local('Roboto'), local('sans-serif'),
        url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        font-weight: 400;
        font-style: normal;
    }

*{
    margin: 0;
    padding: 0;
}
 html{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      overflow-x: hidden;
    }
 }
body{
    margin: 0 ;
    padding: 0 ;
    width: 100%;
    max-width: 1366px;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    font-family: "Roboto", sans-serif;
    @media (max-width: 600px) {
      overflow-x: hidden;
      max-width: auto;
      width: auto;
    }


   /*SCROLLBAR*/
   ::-webkit-scrollbar {
    width: 1rem;
    transition: all 0.5s;
    background-color: transparent;
    background: transparent;
    overflow-x: hidden;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: none;
    background-color: transparent;
    background: transparent;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.navBar.primary} 0%,
      ${({ theme }) => theme.navBar.primary} 100%
    );
    border-radius: 3px;
    opacity: 0.3;
    transition: all 0.5s;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.navBar.primary} 100%,
      ${({ theme }) => theme.navBar.primary} 0%
    );
    transition: all 0.5s;
  }
}
  #root{
    background-color: ${({ theme }) => theme.body};
    padding: 0;
    margin: 0;
    @media (max-width: 600px) {
    overflow-x: hidden !important;
  }
  }
`;

/*Styles pass as props */
const stylesThemes = {
  body: "#FAFAFA",
  primary: "#100217E6",
  secondary: "#E4E8EE",
  textColor: "#030B1C",
  filterColor: "#E4E8EE",
  navBar: {
    primary: "#100217E6",
    secondary: "#FAFAFA",
  },
};

const TotalContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 800px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 600px) {
    overflow-x: hidden !important;
  }
`;

export { TotalContainer, GlobalStyle, stylesThemes };
