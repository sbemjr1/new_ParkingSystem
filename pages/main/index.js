import { useRouter } from "next/router";
import * as S from "../../styles/SmartParkMainStyles";

export default function SmartParkMainPage() {
  const router = useRouter();

  const onClickMoveToSlot = () => {
    router.push("/slot");
  };

  const onClickMoveToNotice = () => {
    router.push("/notice");
  };

  const onClickMoveToLocation = () => {
    router.push("/location");
  };

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Logo>
          <S.LogoImg src="images/cbnuLogo.png" />
        </S.Logo>
        <S.TitleWrapper>
          <S.Title>SMART PARKING SYSTEM</S.Title>
          <S.SubTitle>국내 최초 스마트 주차 시스템 캠퍼스</S.SubTitle>
        </S.TitleWrapper>
        <S.ItemWrapper>
          <S.ItemBtn onClick={onClickMoveToSlot}>주차 현황</S.ItemBtn>
          <S.ItemBtn onClick={onClickMoveToLocation}>주차장 위치</S.ItemBtn>
          <S.ItemBtn onClick={onClickMoveToNotice}>공지 및 문의</S.ItemBtn>
          <S.ItemBtn>개발진 소개</S.ItemBtn>
        </S.ItemWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
