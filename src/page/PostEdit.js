import React from "react";
import { Grid, Input, Button, EditTextarea } from "../elements/Index";
import Image from "../images/Image";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/ConfigureStore";

const PostEdit = (props) => {
  const id = props.match.params.id;
  console.log(props);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(id));
  }, []);

  const post = useSelector((state) => state.post.post);
  console.log(post);

  const [editcontents, seteditContents] = React.useState("");

  const changeContents = (e) => {
    seteditContents(e.target.value);
    console.log(e.target.value);
  };

  // console.log(post);
  // console.log(id);
  // const post_list = useSelector((store) => store.post.list);
  // console.log(post_list);

  // const post = post_list[post_idx];

  // axios.get("https://606b1ec0f8678400172e5a7f.mockapi.io/post").then((doc) => {
  //   console.log(doc.data);
  //   const post_idx = doc.data.findIndex((p) => p.id === id);

  // });
  const is_edit = false;

  console.log(is_edit);

  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <Grid>
            <TitleH1>{post.title}</TitleH1>
          </Grid>
          <Grid padding="0px">
            <MidInfoBar>
              <Information>
                <span className="username">
                  <a>{post.nickname}</a>
                </span>
                <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                  ·
                </span>
                <span>{post.createdAt}</span>
              </Information>
              <LikeBox>
                <LikeButton>
                  <LikeSVG width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                    ></path>
                  </LikeSVG>
                  <span>{post.likeCnt}</span>
                </LikeButton>
              </LikeBox>
            </MidInfoBar>
          </Grid>
          <Grid>
            <Image src={post.img}></Image>
          </Grid>
          <EditTextarea
            placeholder="수정할 내용을 입력 하세요."
            _onChange={changeContents}
          ></EditTextarea>
          <ButtonBox>
            <Button>완료</Button>
            <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}></div>
            <Button
              _onClick={() => {
                history.replace("/");
              }}
            >
              취소
            </Button>
          </ButtonBox>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

PostEdit.defaultProps = {
  title: "제목들어갈자리",
  nickname: "유저닉네임",
  createdAt: "2021-04-03",
  likeCnt: 0,
  contents: "포스팅 내용이 있어야 할 자리",
  img:
    "https://media.vlpt.us/images/mowinckel/post/8697e46e-248b-4b08-aac1-8f0bb72e09d7/giphy.gif?w=640",
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const ContentDiv = styled.div`
  line-height: 200%;
  box-sizing: border-box;
  height: 10rem;
  /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px; */
  border: 1px solid rgb(173, 181, 189);
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 90rem;
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
  @media (max-width: 1560px) {
    width: calc(85% - 2rem);
  }

  @media (max-width: 1360px) {
    width: calc(80% - 2rem);
  }

  @media (max-width: 1056px) {
    width: calc(70% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(60% - 1rem);
  }
`;

const Container = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    width: calc(90% - 5rem);
  }
  @media (max-width: 1000px) {
    width: calc(90% - 0.5rem);
  }
  @media (max-width: 768px) {
    width: calc(80% - 0.5rem);
  }
`;

const MidInfoBar = styled.div`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

const Information = styled.div`
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  color: rgb(73, 80, 87);

  & a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
`;

const LikeBox = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const LikeButton = styled.button`
  background: white;
  border: 1px solid rgb(173, 181, 189);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 1.5rem;
  border-radius: 0.75rem;
  outline: none;
  font-family: inherit;

  & span {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(173, 181, 189);
  }
`;

const LikeSVG = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.75rem;
  color: rgb(173, 181, 189);
  :not {
    overflow: hidden;
  }
`;

const TitleH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export default PostEdit;
