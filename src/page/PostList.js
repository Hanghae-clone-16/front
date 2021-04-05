import React from "react";
import styled from "styled-components";
import Post from "../components/Post";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <Wrap_semi>
          <Container>
            <Main_List>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </Main_List>
          </Container>
        </Wrap_semi>
      </Wrap>
    </React.Fragment>
  );
};
fetch("3.35.233.186")
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      console.log("로딩 성공!");
    }
  });

const Wrap = styled.div`
  box-sizing: inherit;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1919px) {
    width: 1376px;
  }

  @media (max-width: 1440px) {
    width: 1024px;
  }

  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
`;
const Wrap_semi = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Container = styled.div`
  flex: 1 1 0%;
`;

const Main_List = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
`;

export default PostList;
