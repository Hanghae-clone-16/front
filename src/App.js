import "./App.css";
import React from "react";
import PostList from "./page/PostList";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/ConfigureStore";

import PostWrite from "./page/PostWrite";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/search" exact component={Search} />
        </ConnectedRouter>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  box-sizing: "inherit";
`;

export default App;
