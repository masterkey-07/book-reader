import { useEffect, useRef, useState } from "react";
import GlobalStyle from "./style";
import Navbar from "./portal/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { getBooks } from "./Pages/Books/state/actions";
import Title from "./portal/Title";
import Pages from "./Pages";
import {
  Header,
  Main,
  Container,
  Content,
  SkyBackground,
} from "./portal/style";

const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [title, setTitle] = useState("Leitor de Livros da Ana");
  const ref = useRef();
  useEffect(() => {
    store.dispatch(getBooks());
  });

  return (
    <Container>
      <Provider store={store}>
        <Router onUpdate={() => alert("a")}>
          <GlobalStyle />
          <Header open={navbar}>
            <i
              className="fas fa-bars"
              style={{ color: "rgb(236, 219, 186)" }}
              onClick={() => setNavbar(!navbar)}
            ></i>
            <Title title={title} />
          </Header>
          <Main>
            <Navbar open={navbar} set={setNavbar} />
            <SkyBackground ref={ref}>
              <Content>
                <Pages setTitle={setTitle} refContent={ref} />
              </Content>
            </SkyBackground>
          </Main>
        </Router>
      </Provider>
    </Container>
  );
};

export default App;
