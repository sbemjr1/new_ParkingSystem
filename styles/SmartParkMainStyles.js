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

export const MainWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 601px) {
    width: 1920px;
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 601px) {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
`;

export const LogoImg = styled.img`
  @media screen and (max-width: 600px) {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: 601px) {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 40px 0;
  }
  @media screen and (min-width: 601px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 60px 0;
  }
`;

export const Title = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 601px) {
    font-size: 50px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 15px;
    color: white;
  }
  @media screen and (min-width: 601px) {
    font-size: 25px;
    color: white;
  }
`;

export const ItemWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 601px) {
    display: flex;
    justify-content: center;
  }
`;

export const ItemBtn = styled.button`
  @media screen and (max-width: 600px) {
    width: 200px;
    padding: 20px 0;
    font-size: 15px;
    font-weight: 500;
    background: inherit;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
  @media screen and (min-width: 601px) {
    width: 120px;
    padding: 20px 0;
    font-size: 15px;
    font-weight: 600;
    background: inherit;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`;
