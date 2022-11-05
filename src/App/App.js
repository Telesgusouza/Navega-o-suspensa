import * as Styled from "./style.js";
import Header from "../components/Header/index.js";
import Main from "../components/Main/index.js";

function App() {
  return (
    <Styled.Container>
      <Header />
      <Main/>
    </Styled.Container>
  );
}

export default App;
