import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgTop from "./assets/bg-top.svg";

import CardList from "./components/CardList";
function App() {
  return (
    <Container>
      <GlobalStyles />
      <CardList />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7fe;
  background-image: url(${bgTop});
  background-repeat: no-repeat;
  background-position: right -190px top 0;
`;
