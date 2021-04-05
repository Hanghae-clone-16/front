import React from "react";
import moment from "moment";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

const SET_POST = "SET_POST"; // 목록 가져오는역할
const ADD_POST = "ADD_POST"; // 리덕스에 추가로 post 넣어주는 역할

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// 수정할때 필요한것이 어떤것을 수정할 것인지(post_id) 와 수정할 내용(post)가 필요하기에 두개써줌

const initialState = {
  id: 1,
  title: "내 포트폴리오가 서류탈락인 이유 - ",
  contents: "똑같은 주니어인데, 왜 bla bla~~~~",
  img: "img_url",
  created_At: moment().format("YYYY년 MM월 DD일"),
  comment_cnt: 11,
  nickname: "dongy",
  like_cnt: 193,
};

const getPostDB = (
  id,
  title,
  contents,
  img,
  created_At,
  comment_cnt,
  nickname,
  like_cnt
) => {
  return function (dispatch, getState, { history }) {
    fetch("3.35.233.186")
      .then((res) => res.json())
      .then((res) => {
        console.log;
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post); // post들 맨앞으로(unshift) 추가
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostDB,
};

export { actionCreators };
