import styled from "styled-components";
import OffCanvas from "react-aria-offcanvas";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.navBar.primary};
  padding: 17px 0 0;
  @media (max-width: 600px) {
    padding: 0 0 0;
    height: 69px;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const MobileMenu = styled(OffCanvas)`
  &.burgerMenu {
    width: 250px !important;
    height: 100% !important;
    height: 100%;
    background-color: ${({ theme }) => theme.navBar.primary};
  }
  img {
    width: 27px;
    height: 24px;
    margin-right: 0.5rem;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  &.logoContainer {
    height: 60%;
    max-height: 60px;
    flex-flow: row wrap;
    .logo {
      width: 206px;
      height: 29.89px;
    }
    @media (max-width: 600px) {
      width: 60%;
      height: 100%;
      max-height: 100%;
      .logo {
        width: 140px;
        height: 20px;
      }
    }
  }

  &.links {
    max-width: 804px;
    flex-flow: row nowrap;
  }
  &.userLinksContainer {
    justify-content: flex-end;
    align-items: flex-end;
    height: 0;
    @media (max-width: 600px) {
      width: 20%;
      height: 100%;
    }
  }
  &.userLinks {
    width: 70px;
    height: 24px;
    margin-right: 24px;
    flex-flow: row nowrap;
    justify-content: space-between;
    img {
      width: 100%;
      max-width: 23.72px;
      max-height: 23.72px;
      :hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.08);
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      margin-right: 15px;
      justify-content: flex-end;
      img {
        width: 27px;
        height: 24px;
        :hover {
          transition: all 0.3s ease-in-out;
          transform: scale(1);
        }
      }
    }
  }
  &.burgerContainer {
    width: 20%;
  }
`;

const TitleContainer = styled.div`
  &.links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 17px;
    a {
      text-decoration: none;
    }
    @media (max-width: 600px) {
      margin-top: 10px;
      flex-flow: column nowrap;
      justify-content: flex-start;
    }
  }
`;

const Title = styled.h1`
  width: auto;
  height: 24px;
  font-size: 20px;
  text-align: left;
  font-weight: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.navBar.secondary};
  transition: all 0.3s ease-in-out;
  margin-bottom: 11px;
  :hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.08);
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 40px;
    text-align: center;
    :hover {
      transition: all 0.3s ease-in-out;
      transform: scale(1);
    }
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: none;
  border: none;
  padding: 0.5rem;
  &#menu-button {
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding-left: 1rem;
  }

  svg {
    color: ${({ theme }) => theme.navBar.secondary};
    font-size: 20px;
  }
`;

export { Container, MobileMenu, SubContainer, TitleContainer, Title, Button };
