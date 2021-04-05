import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements/Index";

const PostWrite = (props) => {
  const { title, contents, img, createdAt } = props;
  return (
    <React.Fragment>
      <Grid>
        <Grid padding="100px">
          <Input placeholder="제목을입력"></Input>
        </Grid>
        <Grid>
          <h4>사진업로드button</h4>
        </Grid>
        <Grid>
          <Input multiline />
        </Grid>
        <Grid is_flex>
          <Button>완료</Button>
          <Button>취소</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PostWrite.defaultProps = {
  title: null,
  contents: null,
  img: null,
  createdAt: "2021년 4월 3일",
};

export default PostWrite;
