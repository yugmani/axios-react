import DataFetching from "./components/DataFetching";
import PhotoFetching from "./components/PhotoFetching";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>Fetching Data in React</Header>
      <DataFetching />
      <PhotoFetching />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: navy;
  color: white;
`;

const Header = styled.h1`
  text-decoration: underline;
`;
