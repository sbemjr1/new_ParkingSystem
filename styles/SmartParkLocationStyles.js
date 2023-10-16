import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ),
    url("images/bg.jpg");
`;

export const InnerWrapper = styled.div`
  width: 900px;
  height: 700px;
  background-color: black;
  /* opacity: 0.8; */
  border-radius: 20px;
  padding: 50px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

export const GoToMainBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  background-color: inherit;
  color: white;
  border: none;
  cursor: pointer;
`;

export const KakaoMap = styled.div`
  width: 100%;
  border-radius: 20px;
  height: 540px;
`;
