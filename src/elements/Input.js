import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
  const { multiline, type, _onChange, label, placeholder, bold } = props;

  if (multiline) {
    return (
      <Grid>
        <ElTextarea
          rows={15}
          onChange={_onChange}
          placeholder={placeholder}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <ElInput
          type={type}
          onChange={_onChange}
          placeholder={placeholder}
          bold={bold}
        ></ElInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiline: false,
  type: "text",
  _onChange: () => {},
  label: false,
  placeholder: "입력하세요.",
  bold: false,
};

const ElInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  padding: 12px 4px;
  font-size: 1rem;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ::placeholder {
    font: 400 13.3333px Arial;
  }
`;

const ElTextarea = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 1rem;
  padding: 12px 4px;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
`;

export default Input;
