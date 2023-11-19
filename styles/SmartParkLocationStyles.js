import styled from "@emotion/styled";

export const Wrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      ),
      url("images/bg.jpg");
  }
  @media screen and (min-width: 601px) {
    width: 1920px;
    height: 940px;
    padding: 0 550px;
    display: flex;
    align-items: center;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      ),
      url("images/bg.jpg");
  }
`;

export const InnerWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 95vw;
    height: 70vh;
    background-color: black;
    /* opacity: 0.8; */
    border-radius: 10px;
    padding: 25px;
  }
  @media only screen and (min-width: 601px) {
    width: 900px;
    height: 700px;
    background-color: black;
    /* opacity: 0.8; */
    border-radius: 20px;
    padding: 50px;
  }
`;

export const ContentsWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
  }
`;

export const HeadWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 601px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 600px) {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 601px) {
    color: white;
    margin-bottom: 30px;
  }
`;

export const GoToMainBtn = styled.button`
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 15px;
    background-color: inherit;
    color: white;
    border: none;
    cursor: pointer;
  }
  @media only screen and (min-width: 601px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
    background-color: inherit;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const KakaoMap = styled.div`
  width: 100%;
  border-radius: 20px;
  height: 57vh;
`;
