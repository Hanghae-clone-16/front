// 메인페이지에서 Post_list 를 구성하는 Post 컴포넌트

import React from "react";
import styled from "styled-components";
import user_pic from "../images/user_image.jpg";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { history } from "../redux/ConfigureStore";

const Post = (props) => {
  const dispatch = useDispatch();
  const { nickname } = props;
  return (
    <React.Fragment>
      <A_Image>
        <Image_Wrap>
          <ImageMain src={props.img}></ImageMain>
        </Image_Wrap>
      </A_Image>

      <Contents_Wrap>
        <A_Contents>
          <Post_Title>{props.title}</Post_Title>
          <Desc_Wrap>
            <Post_Desc>{props.contents}</Post_Desc>
          </Desc_Wrap>
        </A_Contents>
        <SubInfo_Box>
          <Post_Date>{props.createdAt}</Post_Date>
          <span style={{ marginLeft: "0.25rem", marginRight: "0.25rem" }}>
            ·
          </span>
          <Comment>{props.commentsCnt}개의 댓글</Comment>
        </SubInfo_Box>
      </Contents_Wrap>
      <IconBox>
        <A_UserInfo href="/@유저닉네임">
          <ImageCircle></ImageCircle>
          <span>
            by <b>{nickname}</b>
          </span>
        </A_UserInfo>
        <LikeBox>
          <Semi_LikeBox width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            ></path>
          </Semi_LikeBox>
          {props.likeCnt}
        </LikeBox>
      </IconBox>
    </React.Fragment>
  );
};

Post.defaultProps = {
  id: null,
  title: "제목입니다.",
  nickname: "유저닉네임",
  createdAt: "2021-04-03",
  commentsCnt: 0,
  likeCnt: 0,
  contents: "포스팅 내용이 있어야 할 자리",
  img:
    "https://media.vlpt.us/images/mowinckel/post/8697e46e-248b-4b08-aac1-8f0bb72e09d7/giphy.gif?w=640",
};

const PostBox = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    margin: 10px 20px;
    width: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const A_Image = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const IconBox = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid rgb(248, 249, 250);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const LikeBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Semi_LikeBox = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.5rem;
`;

const A_UserInfo = styled.a`
  & span {
    color: rgb(134, 142, 150);
  }

  & span > b {
    color: rgb(52, 58, 64);
  }

  text-decoration: none;
  color: inherit;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const SubInfo_Box = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const A_Contents = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Post_Title = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(33, 37, 41);
`;

const Post_Desc = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(73, 80, 87);
`;

const Post_Date = styled.span`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const Comment = styled.span`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
`;

const Desc_Wrap = styled.div`
  flex: 1 1 0%;
`;

const Contents_Wrap = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const Image_Wrap = styled.div`
  & {
    padding-top: 52.1921%;
  }
  width: 100%;
  position: relative;
`;

const ImageCircle = styled.div`
  object-fit: cover;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin-right: 0.5rem;
  background-image: url("${user_pic}");
  background-size: contain;
`;

const ImageMain = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  src: ${(props) => props.src};
`;

export default Post;
