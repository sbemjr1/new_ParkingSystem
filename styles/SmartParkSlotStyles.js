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
    height: 50vh;
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
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
    display: flex;
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

export const InAndOut = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 601px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const In = styled.div`
  @media screen and (max-width: 600px) {
    width: 130px;
    height: 20px;
    background-color: #fdd755;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 601px) {
    width: 250px;
    height: 40px;
    background-color: #fdd755;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

export const Out = styled.div`
  @media screen and (max-width: 600px) {
    width: 130px;
    height: 20px;
    background-color: #fdd755;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 601px) {
    width: 250px;
    height: 40px;
    background-color: #fdd755;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

export const SlotBox = styled.div`
  width: 33%;
`;

export const SlotBox2 = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SlotWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;

export const Slot = styled.div`
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 30px;
    margin-bottom: 3px;
    border: 0.5px solid white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
  }
  @media only screen and (min-width: 601px) {
    width: 120px;
    height: 60px;
    margin-bottom: 5px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
  }
`;

export const Count = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
  @media only screen and (min-width: 601px) {
    margin-top: 30px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;
