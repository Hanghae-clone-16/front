import styled from 'styled-components';
import React from "react";

const Image = (props) => {
  const {src, size, aligntem} = props;

  const styles = {
      src: src,
      size: size,
      aligntem
  }
  return (
    <React.Fragment>
        <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  )
  
}

  
Image.defaultProps = {
  src: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.sports.khan.co.kr%2Fview.html%3Fart_id%3D201811040720003%26sec_id%3D560201&psig=AOvVaw3EdtcSwNCE3j7GvBfbByZh&ust=1617360859221000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD8h_Lw3O8CFQAAAAAdAAAAABAD",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  align-items: ${(props) => props.aligntem};
`;
  export default Image;