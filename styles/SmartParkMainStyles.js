import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 100vh;
  padding: 0 550px;
  display: flex;
  align-items: center;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ),
    url("images/bg.jpg");
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-image: url("images/cbnuLogo.png");
`;

// export const LogoImg = styled.img`
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
// `;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 60px 0;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-size: 25px;
  color: white;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemBtn = styled.button`
  width: 120px;
  padding: 20px 0;
  font-size: 15px;
  font-weight: 600;
  background: inherit;
  color: white;
  border: 1px solid white;
  cursor: pointer;
`;
