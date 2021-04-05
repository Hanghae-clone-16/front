import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PostList from "./page/PostList";
import Post from "./components/Post";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import PostWrite from "./page/PostWrite";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Route path="/" exact component={PostList} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/search" exact component={Search} />
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  box-sizing: "inherit";
`;

export default App;
