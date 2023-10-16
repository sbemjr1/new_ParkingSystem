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
  display: flex;
  justify-content: space-between;
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

export const InAndOut = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const In = styled.div`
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
`;

export const Out = styled.div`
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
`;

export const Count = styled.div`
  margin-top: 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
