import React from "react";
import styled from "styled-components";

const LoginButton = (props) => {
  const { _onClick } = props;
  return (
    <React.Fragment>
      <ELButton onClick={_onClick}>새 글 작성</ELButton>
    </React.Fragment>
  );
};

LoginButton.defaultProps = {
  _onClick: () => {},
};

const ELButton = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(52, 58, 64);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  font-family: inherit;
  box-sizing: inherit text-align=center;
  color: #ffffff;
  background-color: #343a40;
  display: inline-block;
  :hover {
    background: rgb(134, 142, 150);
  }
`;

export default LoginButton;
