import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.navBar.primary};
  left: 0px;
  bottom: 0px;
  @media (max-width: 600px) {
    height: 161px;
    flex-flow: column nowrap;
    box-shadow: 0px -3px 6px #00000026;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }
`;

const Title = styled.h2`
  width: auto;
  height: 22px;
  margin-right: 67px;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.32px;
  text-align: left;
  color: ${({ theme }) => theme.navBar.secondary};
  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export { Container, SubContainer, Title };
