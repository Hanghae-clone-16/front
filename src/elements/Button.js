import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { _onClick, children, text } = props;

  const styles = {
    onclick: _onClick,
    text: text,
  };
  return (
    <React.Fragment>
      <ElButton {...styles}>{children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  text: false,
  children: null,
};

const ElButton = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  background: white;
  border: 1px solid rgb(52, 58, 64);
  color: rgb(52, 58, 64);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  :hover {
    background-color: rgb(52, 58, 64);
    color: white;
  }
`;

export default Button;
