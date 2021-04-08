import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import moment from "moment";

// Actions
const SET_POST = "SET_POST"; // 목록 가져오는역할
const ADD_POST = "ADD_POST"; // 리덕스에 추가로 post 넣어주는 역할
const GET_POST = "GET_POST"; // 포스트 하나 가져오는 역할
const EDIT_POST = "EDIT_POST"; // 포스트 수정

// Action Creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post, post_id) => ({
  post,
  post_id,
}));

// 수정할때 필요한것이 어떤것을 수정할 것인지(post_id) 와 수정할 내용(post)가 필요하기에 두개써줌

// Initial State
const initialState = {
  list: [],
  post: [],
};

const initialPost = {
  // id: 1,
  title: "내 포트폴리오가 서류탈락인 이유 - ",
  contents: "똑같은 주니어인데, 왜 bla bla~~~~",
  img:
    "https://media.vlpt.us/images/mowinckel/post/8697e46e-248b-4b08-aac1-8f0bb72e09d7/giphy.gif?w=640",
  createdAt: moment().format("YYYY-MM-DD"),
  commentsCnt: 11,
  nickname: "dongy",
  likeCnt: 101,
};

// Mock_Api 주소
// "https://606b1ec0f8678400172e5a7f.mockapi.io/post"

// backend API 주소
// "http://3.35.233.186/api/boards"

const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    let post_list = [];
    axios({
      method: "get",
      url: "http://3.35.233.186/api/boards",
    }).then((docs) => {
      const post_list = docs.data;
      dispatch(setPost(post_list));
    });
  };
};

// Mock_Api 주소

const addPostDB = (title, contents, nickname = "홍길동") => {
  return function (dispatch, getState, { history }) {
    let _post = {
      ...initialPost,
      title: title,
      contents: contents,
      nickname: nickname,
      createdAt: moment().format("YYYY-MM-DD"),
    };

    axios({
      method: "post",
      url: "http://3.35.233.186/api/boards",
      data: _post,
    })
      .then((docs) => {
        // docs.data.push(_post);
        let post = { ..._post, id: docs.data.length + 1 };
        console.log(docs);
        dispatch(addPost(post));
        history.replace("/");
      })
      .catch((err) => {
        console.log("post 작성에 실패하였습니다.", err);
      });
  };
};

const getOnePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://3.35.233.186/api/details/${id}`,
    }).then((doc) => {
      console.log(doc);
      if (!doc.data) {
        return;
      }
      const post = doc.data;
      dispatch(getPost(post));
    });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;

        // getOnePostDB 에서 한개 가져오는데 메인으로 돌아가면 전체다불러온다.
        // 근데 한개짜리랑 중복되는 포스트가 나올수도 있으니, 중복되는값을 빼주는 작업
        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post); // post들 맨앞으로(unshift) 추가
      }),

    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.post);
        draft.post = action.payload.post;
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload);
        draft.post = action.payload.post;
      }),
  },
  initialState
);

// Action creator export
const actionCreators = {
  setPost,
  addPost,
  getPost,
  editPost,
  getPostDB,
  addPostDB,
  getOnePostDB,
};

export { actionCreators };
