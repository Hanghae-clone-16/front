import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
  const { multiline, type, _onChange, label, placeholder } = props;

  if (multiline) {
    return (
      <Grid>
        <ElTextarea
          rows={10}
          onChange={_onChange}
          placeholder={placeholder}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <ElInput type={type} onChange={_onChange} placeholder={placeholder}></ElInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiline: false,
  type: "text",
  _onChange: () => {},
  label: false,
  placeholder: "fwefew",
};

const ElInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  padding: 12px 4px;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
`;

const ElTextarea = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  padding: 12px 4px;
  ${(props) => (props.placeholder ? `placeholder:${props.placeholder};` : "")};
`;

export default Input;
