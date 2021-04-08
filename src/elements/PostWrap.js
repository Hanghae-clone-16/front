import React from "react";
import styled from "styled-components";

const PostWrap = (props) => {
  const { _onClick, children } = props;

  return (
    <React.Fragment>
      <Wrap onClick={_onClick}>{children}</Wrap>
    </React.Fragment>
  );
};

PostWrap.defaultProps = {
  _onClick: () => {},
  children: null,
};

const Wrap = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 767px) {
    margin: 0px;
    width: 100%;
  }
`;

export default PostWrap;
