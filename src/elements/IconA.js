// Header에 속해있는 메인로고(Logo)와 검색형 돋보기로고(Search)를 구현한 최소단위 컴포넌트

import React from "react";
import styled from "styled-components";

const IconA = (props) => {
  const { _onClick, children, label } = props;
  if (label === "Logo") {
    return (
      <>
        <LogoA label={label} onClick={_onClick}>
          {children}
        </LogoA>
      </>
    );
  }
  if (label === "Search") {
    return (
      <>
        <SearchA label={label} onClick={_onClick}>
          {children}
        </SearchA>
      </>
    );
  }
};

IconA.defaultProps = {
  _onClick: () => {},
  children: null,
  label: null,
};

const LogoA = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const SearchA = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.75rem;
`;

export default IconA;
