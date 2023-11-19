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
    height: 65vh;
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
    height: 75vh;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ImgBox = styled.img`
  @media screen and (max-width: 600px) {
    width: 170px;
    height: 180px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 601px) {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin-right: 20px;
  }
`;

export const OurInfo = styled.div`
  @media screen and (max-width: 600px) {
    color: white;
    font-size: 12px;
    padding-top: 5px;
  }
  @media only screen and (min-width: 601px) {
    color: white;
    font-size: 20px;
    padding-top: 10px;
  }
`;

export const InfoHeader = styled.div`
  @media screen and (max-width: 600px) {
    font-weight: 600;
    :nth-child(3) {
      margin-bottom: 15px;
    }
  }
  @media only screen and (min-width: 601px) {
    font-weight: 600;
    :nth-child(3) {
      margin-bottom: 15px;
    }
  }
`;

export const InfoBody = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 10px;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 601px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
