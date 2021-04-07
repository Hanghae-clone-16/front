import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements/Index";
import Upload from "../shared/Upload";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { history } from "../redux/ConfigureStore";

const PostWrite = (props) => {
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const dispatch = useDispatch();

  // 바뀌는 텍스트값 바로바로 state로 전달(useState)
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostDB(title, contents));
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Input
            _onChange={changeTitle}
            bold
            placeholder="제목을 입력하세요."
          />
        </Grid>
        <Grid padding="30px 0px">
          <Upload></Upload>
        </Grid>

        <Grid>
          <Input
            _onChange={changeContents}
            multiline
            placeholder="내용을 입력하세요."
          />
        </Grid>
        <Grid is_flex padding="30px 0px">
          <Button _onClick={addPost}>완료</Button>
          <Button>취소</Button>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: 70rem;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 16px 0px;
  border-radius: 10px;
  @media (max-width: 1270px) {
    width: calc(70% - 2rem);
  }

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(50% - 0.5rem);
  }
`;

export default PostWrite;
