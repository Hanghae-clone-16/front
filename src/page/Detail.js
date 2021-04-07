import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Image from "../images/Image";
import styled from "styled-components";

const Detail = (props) => {
  const { title, img, contents, insert_dt } = props;
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <Grid>
            <TitleH1>서류탈락하는 개발자 포트폴리오 특</TitleH1>
          </Grid>
          <Grid padding="0px">
            <MidInfoBar>
              <Information>
                <span class="username">
                  <a href="/@suyeonme">suyeonme</a>
                </span>
                <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                  ·
                </span>
                <span>2021년 3월 13일</span>
              </Information>
              <LikeBox>
                <LikeButton>
                  <LikeSVG width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                    ></path>
                  </LikeSVG>
                  <span>138</span>
                </LikeButton>
              </LikeBox>
            </MidInfoBar>
          </Grid>
          <Grid>
            <Image src="https://media.vlpt.us/images/suyeonme/post/96afceb5-4686-4fc9-80ed-9b4b225fa60f/vector-designer-s-desktop-illustration.jpg"></Image>
          </Grid>
        </Container>
        <Grid margin="16px" padding="16px">
          <Input multiline placeholder="contents" />
        </Grid>
        <Grid alignitem="center">
          <Button>수정</Button>
          <Button>삭제</Button>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
};

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

export default Detail;
