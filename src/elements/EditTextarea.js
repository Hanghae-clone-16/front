// 수정하기 화면에서 내용을 수정하는 textarea 최소단위 컴포넌트

import React from "react";
import styled from "styled-components";
import { Grid, Text } from "./Index";

const EditTextarea = (props) => {
  const { label, _onChange, placeholder, bold } = props;
  const styles = {
    label: label,
    placeholder: placeholder,
    bold: bold,
  };

  return <ContentsArea {...styles} onChange={_onChange}></ContentsArea>;
};

EditTextarea.defaultProps = {
  _onChange: () => {},
  label: false,
  placeholder: "내용을 입력하세요.",
  bold: false,
};

const ContentsArea = styled.textarea`
  line-height: 200%;
  box-sizing: border-box;
  height: 10rem;
  border: 1px solid rgb(173, 181, 189);
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  padding: 20px;
`;

export default EditTextarea;
