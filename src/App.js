import "./App.css";
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/ConfigureStore";

import { PostWrite, Login, PostList, Detail, PostEdit } from "./page/Index";

import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exaxt component={Login} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/search" exact component={Search} />
          <Route path="/details/:id" exact component={Detail} />
          <Route path="/details/:id/edit" exact component={PostEdit} />
        </ConnectedRouter>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  box-sizing: "inherit";
`;

export default App;
