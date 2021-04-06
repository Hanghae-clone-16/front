import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Wrapper>
        <GrayBlock>
          <div>
            <LeftImg
              src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
              alt="welcome"
            />
            <Welcome>환영합니다!</Welcome>
          </div>
        </GrayBlock>
        <WhiteBlock>
          <ExitWrapper>
            <ExitSvg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              tabindex="1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </ExitSvg>
          </ExitWrapper>
          <BlockContentWrap>
            <BlockContent>
              <UpperWrapper>
                <Title>로그인</Title>
                <section style={{ display: "block" }}>
                  <EmailForm>
                    <LoginInput
                      tabindex="2"
                      placeholder="이메일을 입력하세요."
                      // value=""
                    />
                    <EmailForm>
                      <LoginInput
                        tabindex="2"
                        placeholder="비밀번호를 입력하세요."
                        // value=""
                      />
                    </EmailForm>
                    <EmailForm>
                      <LoginButton tabindex="3">로그인</LoginButton>
                    </EmailForm>
                  </EmailForm>
                </section>
                <SocialSection>
                  <h4
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      color: "rgb(134, 142, 150)",
                    }}
                  >
                    소셜 계정으로 로그인
                  </h4>
                  <SocialButtonBox class="sc-ifAKCX bdoiie">
                    <ATagGit
                      tabindex="4"
                      href="https://v2.velog.io/api/v2/auth/social/redirect/github?next=/"
                      class="sc-bxivhb iAlccC"
                      style={{ background: "rgb(39, 46, 51)" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <mask
                          id="github"
                          width="20"
                          height="20"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#ffffff"
                            fill-rule="evenodd"
                            d="M6.69 15.944c0 .08-.093.145-.21.145-.133.012-.226-.053-.226-.145 0-.081.093-.146.21-.146.12-.012.226.053.226.146zm-1.255-.182c-.028.08.053.173.174.198.105.04.226 0 .25-.081.024-.08-.053-.173-.174-.21-.104-.028-.221.012-.25.093zm1.783-.068c-.117.028-.198.104-.186.197.012.08.117.133.238.105.117-.028.198-.105.186-.186-.012-.076-.121-.129-.238-.116zM9.87.242C4.278.242 0 4.488 0 10.08c0 4.471 2.815 8.298 6.835 9.645.516.093.697-.226.697-.488 0-.25-.012-1.63-.012-2.476 0 0-2.822.605-3.415-1.202 0 0-.46-1.173-1.121-1.475 0 0-.924-.633.064-.621 0 0 1.004.08 1.557 1.04.883 1.557 2.363 1.109 2.94.843.092-.645.354-1.093.645-1.36-2.255-.25-4.529-.576-4.529-4.455 0-1.109.307-1.665.952-2.375-.105-.262-.448-1.342.105-2.738C5.56 4.157 7.5 5.51 7.5 5.51a9.474 9.474 0 0 1 2.532-.344c.86 0 1.726.117 2.533.343 0 0 1.939-1.355 2.782-1.089.552 1.4.21 2.476.105 2.738.645.714 1.04 1.27 1.04 2.375 0 3.891-2.375 4.202-4.63 4.456.372.319.686.923.686 1.87 0 1.36-.012 3.041-.012 3.372 0 .262.186.58.698.488C17.266 18.379 20 14.552 20 10.08 20 4.488 15.464.24 9.871.24zM3.919 14.149c-.052.04-.04.133.029.21.064.064.157.093.21.04.052-.04.04-.133-.029-.21-.064-.064-.157-.092-.21-.04zm-.435-.326c-.028.052.012.117.093.157.064.04.145.028.173-.028.028-.053-.012-.117-.093-.158-.08-.024-.145-.012-.173.029zm1.306 1.435c-.064.053-.04.174.053.25.092.093.21.105.262.04.052-.052.028-.173-.053-.25-.088-.092-.21-.104-.262-.04zm-.46-.593c-.064.04-.064.146 0 .238.065.093.174.133.226.093.065-.053.065-.157 0-.25-.056-.093-.16-.133-.225-.08z"
                            clip-rule="evenodd"
                          ></path>
                        </mask>
                        <g mask="url(#github)">
                          <path fill="currentColor" d="M0 0h20v20H0z"></path>
                        </g>
                      </svg>
                    </ATagGit>
                    <ATagGoogle
                      tabindex="5"
                      href="https://v2.velog.io/api/v2/auth/social/redirect/google?next=/"
                      class="sc-bxivhb fMYOHy"
                      style={{ background: "white" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#4285F4"
                          d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M10.2 19.931c2.753 0 5.064-.886 6.753-2.414l-3.218-2.436c-.862.587-2.017.997-3.536.997a6.126 6.126 0 0 1-5.801-4.141l-.12.01-3.148 2.38-.041.112c1.677 3.256 5.122 5.492 9.11 5.492z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M4.398 11.937a6.008 6.008 0 0 1-.34-1.971c0-.687.125-1.351.329-1.971l-.006-.132-3.188-2.42-.104.05A9.79 9.79 0 0 0 .001 9.965a9.79 9.79 0 0 0 1.088 4.473l3.309-2.502z"
                        ></path>
                        <path
                          fill="#EB4335"
                          d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.878-2.746C15.253.985 12.953 0 10.199 0 6.211 0 2.766 2.237 1.09 5.492l3.297 2.503A6.152 6.152 0 0 1 10.2 3.853z"
                        ></path>
                      </svg>
                    </ATagGoogle>
                    <ATagFacebook
                      tabindex="6"
                      href="https://v2.velog.io/api/v2/auth/social/redirect/facebook?next=/"
                      class="sc-bxivhb iAlccC"
                      style={{ background: "rgb(59, 89, 152)" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <mask
                          id="facebook"
                          width="12"
                          height="20"
                          x="4"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M7.84 20v-8.945H4.844V7.5H7.84V4.7C7.84 1.655 9.7 0 12.414 0c1.3 0 2.418.098 2.742.14v3.18h-1.883c-1.476 0-1.761.703-1.761 1.73V7.5h3.332l-.457 3.555h-2.875V20"
                            clip-rule="evenodd"
                          ></path>
                        </mask>
                        <g mask="url(#facebook)">
                          <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </g>
                      </svg>
                    </ATagFacebook>
                  </SocialButtonBox>
                </SocialSection>
              </UpperWrapper>
              <Foot>
                <span>아직 회원이 아니신가요?</span>
                <Link class="link" tabindex="7" data-testid="switchmode">
                  회원가입
                </Link>
              </Foot>
            </BlockContent>
          </BlockContentWrap>
        </WhiteBlock>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 20;
`;

const Wrapper = styled.div`
  width: 606px;
  height: 480px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running hwrkPK;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  display: flex;

  @media (max-width: 768px) {
    flex: 1 1 0%;
    width: auto;
    height: 100%;
  }
`;

const GrayBlock = styled.div`
  width: 216px;
  background: rgb(241, 243, 245);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Welcome = styled.div`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: rgb(73, 80, 87);
  text-align: center;
  font-weight: 600;
`;

const WhiteBlock = styled.div`
  flex: 1 1 0%;
  background: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const ExitWrapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: rgb(134, 142, 150);
  margin-bottom: 0px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const ExitSvg = styled.svg`
  cursor: pointer;
  stroke: currentcolor;
  fill: currentcolor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
  :not {
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const BlockContentWrap = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const BlockContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.5;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-bottom: 0px;
  & h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: rgb(134, 142, 150);
    margin: 0px;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

const EmailForm = styled.form`
  width: 100%;
  display: block;
  height: 3rem;
  margin-top: 0em;
  margin-bottom: 2em;
`;

const LoginButton = styled.button`
  background: rgb(18, 184, 134);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 6rem;
  word-break: keep-all;
  cursor: pointer;
`;

const SocialSection = styled.section`
  margin-top: 2.5rem;
  display: block;
`;

const SocialButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const ATagGit = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  transition: all 0.125s ease-in 0s;
  color: white;
  & {
    background: rgb(39, 46, 51);
  }
`;

const ATagGoogle = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  transition: all 0.125s ease-in 0s;
  color: white;
  border: 1px solid rgb(222, 226, 230);
  & {
    background: white;
  }
`;

const ATagFacebook = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  transition: all 0.125s ease-in 0s;
  color: white;
  & {
    background: rgb(59, 89, 152);
  }
`;

const Foot = styled.div`
  text-align: right;
  display: block;
  & span {
    margin-right: 0.25rem;
  }
`;

const Link = styled.div`
  display: inline-block;
  font-weight: bold;
  color: rgb(18, 184, 134);
  cursor: pointer;
`;

const LoginInput = styled.input`
  flex: 1 1 0%;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 1rem;
  font-size: 1rem;
  border-top: 1px solid rgb(222, 226, 230);
  border-bottom: 1px solid rgb(222, 226, 230);
  border-left: 1px solid rgb(222, 226, 230);
  border-image: initial;
  border-right: 1px solid rgb(222, 226, 230);
  margin-bottom: 1em;
  width: 85%;
  overflow: hidden;
`;

export default Login;
