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
    url("/images/bg.jpg");
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
  height: 520px;
  display: flex;
  flex-direction: column;
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

export const ListWrapper = styled.div`
  width: 100%;
  height: 200px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentsInput = styled.textarea`
  height: 150px;
  padding: 7px;
  border-radius: 5px;
  background-color: inherit;
  border: 1px solid gray;
  color: white;
`;

export const PhoneInput = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 7px;
  border-radius: 5px;
  background-color: inherit;
  border: 1px solid gray;
  color: white;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  background-color: gray;
  color: white;
  border: 1px solid gray;
`;
