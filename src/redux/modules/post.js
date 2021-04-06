import moment from "moment";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";

// Actions
const SET_POST = "SET_POST"; // 목록 가져오는역할
const ADD_POST = "ADD_POST"; // 리덕스에 추가로 post 넣어주는 역할

// Action Creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// 수정할때 필요한것이 어떤것을 수정할 것인지(post_id) 와 수정할 내용(post)가 필요하기에 두개써줌

// Initial State
const initialState = {
  list: [],
};

const initialPost = {
  id: 1,
  title: "내 포트폴리오가 서류탈락인 이유 - ",
  contents: "똑같은 주니어인데, 왜 bla bla~~~~",
  img:
    "https://media.vlpt.us/images/mowinckel/post/8697e46e-248b-4b08-aac1-8f0bb72e09d7/giphy.gif?w=640",
  createdAt: "2021-04-01",
  commentsCnt: 11,
  nickname: "dongy",
  likeCnt: 193,
};

// Mock_Api 주소
// "https://606b1ec0f8678400172e5a7f.mockapi.io/post"

// backend API 주소
// "3.35.233.186/api/boards"

const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    let post_list = [];
    axios({
      method: "get",
      url: "https://606b1ec0f8678400172e5a7f.mockapi.io/post",
    }).then((docs) => {
      console.log(docs);
      const post_list = docs.data;
      console.log(post_list);
      dispatch(setPost(post_list));
    });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post); // post들 맨앞으로(unshift) 추가
      }),
  },
  initialState
);

// Action creator export
const actionCreators = {
  setPost,
  addPost,
  getPostDB,
};

export { actionCreators };
