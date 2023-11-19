import * as S from "../../styles/SmartParkIntorduceStyles";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function SmartParkNoticePage() {
  const router = useRouter();
  const GoToMain = () => {
    router.push("/");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.HeadWrapper>
          <S.Title>개발진 소개</S.Title>
          <S.GoToMainBtn onClick={GoToMain}>X</S.GoToMainBtn>
        </S.HeadWrapper>
        <S.ContentsWrapper>
          <S.ImgWrapper>
            <S.ImgBox src="images/oh.jpg" />
            <S.OurInfo>
              <S.InfoHeader>충북대학교 정보통신공학부</S.InfoHeader>
              <S.InfoHeader>오경석</S.InfoHeader>
              <S.InfoHeader>Email : s5seon@cbnugbuk.ac.kr</S.InfoHeader>
              <S.InfoBody>- 비전AI모델 학습</S.InfoBody>
              <S.InfoBody>- 주차 차량 판별 기능 구현</S.InfoBody>
              <S.InfoBody>- 관리자 기능 구현</S.InfoBody>
            </S.OurInfo>
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.ImgBox src="images/lee.jpg" />
            <S.OurInfo>
              <S.InfoHeader>충북대학교 정보통신공학부</S.InfoHeader>
              <S.InfoHeader>이승준</S.InfoHeader>
              <S.InfoHeader>Email : sbemjr1@naver.com</S.InfoHeader>
              <S.InfoBody>- 사용자 기능 구현</S.InfoBody>
              <S.InfoBody>- 데이터 베이스 구현</S.InfoBody>
              <S.InfoBody>- 웹 화면 구현</S.InfoBody>
            </S.OurInfo>
          </S.ImgWrapper>
        </S.ContentsWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

export default SmartParkNoticePage;
