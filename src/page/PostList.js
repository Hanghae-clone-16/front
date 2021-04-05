import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import post from "../redux/modules/post";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <Wrap>
        <Wrap_semi>
          <Container>
            <Main_List>
              {post_list.map((p, idx) => {
                return <Post key={p.id} {...p} />;
              })}
            </Main_List>
          </Container>
        </Wrap_semi>
      </Wrap>
    </React.Fragment>
  );
};

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
