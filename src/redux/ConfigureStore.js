import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Post from "./modules/post";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  post: Post,
  router: connectRouter(history),
});

// withExtraArgument : thunk 내장함수 => 다른함수들도 넘겨서 사용하게 해줌(여기선 history)
const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서 로거 사용 설정
if (env === "development") {
  const { logger } = require("redux-logger"); // require : 모듈을 불러와주는데 import 안쓰는이유는 전체에적용안하고 여기서만쓰려고
  middlewares.push(logger);
}

// redux 데브툴즈 사용
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store 만들기
// initialStore 가지고 스토어를 만든다. -> rootReducer와 미들웨어(enhancer)를 묶어서 store 생성
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
