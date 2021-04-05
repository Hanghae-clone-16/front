import React from "react";
import react from "react"
import styled from "styled-components";

const Button = (props) =>{
  const onClickEnter = () =>{
    return(
      <React.Fragment>

      </React.Fragment>
    )
  }


  return(
    <React.Fragment>
      <ELButton  onClick={}>로그인</ELButton>
    </React.Fragment>
  )
}
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
box-sizing: inherit
text-align=center;
color:#FFFFFF;
background-color:#343A40; 
display: inline-block;

`;

export default Button