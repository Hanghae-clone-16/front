// Header에 붙어있는 돋보기형 아이콘의 Search버튼을 누르면 나오게되는 검색어 입력 화면 컴포넌트

import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Search = (props) => {
  return (
    <React.Fragment>
      <Box>
        <Box1>
          <Inputbox>
            <svg width="17" height="17" viewBox="0 0 17 17">
              <path
                fill-rule="evenodd"
                d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <Plac input placeholder="검색어를 입력하세요"></Plac>
          </Inputbox>
        </Box1>
      </Box>
    </React.Fragment>
  );
};

const Box = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
`;
const Box1 = styled.div`
  box-sizing: inherit;
`;
const Plac = styled.input`
  font-size: 1.5rem;
  line-height: 2rem;
  height: 2rem;
  padding: 0px;
  border: none;
  outline: 0px;
  color: rgb(73, 80, 87);
  min-width: 0px;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
`;
const Inputbox = styled.div`
  display: flex;
  border: 1px solid rgb(173, 181, 189);
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  cursor: text;
  height: 4rem;
  padding: 0px 1.5rem;
`;

export default Search;
