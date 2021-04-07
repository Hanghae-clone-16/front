import React from "react"
import Header from "../components/Header";
import Grid from "../elements/Grid";
import Text from "../elements/Text"
import Input from "../elements/Input"
import Button from "../elements/Button"
import Image from "../images/Image";

const Detail = (props) =>{
  const {title,img,contents,insert_dt} = props;
  return(
    <React.Fragment>
      <Grid>
        <Text size="36px" bold align="center"  >서류탈락하는 개발자 포트폴리오 특</Text>
      </Grid>
      <Grid padding="0px">
        <Text size="25px" bold align="center">작성자,작성날짜</Text>
      </Grid>
      <Grid >
          <Image src="https://media.vlpt.us/images/suyeonme/post/96afceb5-4686-4fc9-80ed-9b4b225fa60f/vector-designer-s-desktop-illustration.jpg" size="500" alignitem="center"></Image>
        </Grid>
        <Grid margin="16px" padding="16px">
          <Input multiline placeholder="contents" />
        </Grid>
        <Grid alignitem="center" >
          <Button>수정</Button>
          <Button>삭제</Button>
        </Grid>
    </React.Fragment>
  )
}
export default Detail




