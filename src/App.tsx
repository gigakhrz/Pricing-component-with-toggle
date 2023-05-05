import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgTop from "./assets/bg-top.svg";
import bgBottom from "./assets/bg-bottom.svg";
import CheckBox from "./components/CheckBox";
import CardList from "./components/CardList";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <Container>
      <GlobalStyles />
      <CheckBox check={check} setCheck={setCheck} />
      <CardList check={check} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 64px 0 71px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7fe;
  background-image: url(${bgTop});
  background-repeat: no-repeat;
  background-position: right -190px top 0;
  gap: 80px;
  @media (min-width: 1024px) {
    background-image: url(${bgTop}), url(${bgBottom});
    background-repeat: no-repeat, no-repeat;
    background-position: top 20px right 0px, bottom 0px left 0px;
    gap: 66.5px;
  }
  @media (min-width: 1440px) {
    background-size: auto, 550px;
  }
`;
