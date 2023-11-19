import * as S from "../../styles/SmartParkLocationStyles";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

function SmartParkLocationPage() {
  const router = useRouter();
  useEffect(() => {
    if (typeof kakao !== "undefined") {
      const container = document.getElementById("map");
      //지도를 담을 영역의 DOM 레퍼런스

      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(36.6256, 127.4572), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(36.6256, 127.4572);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }
  }, []);

  const GoToMain = () => {
    router.push("/");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.HeadWrapper>
          <S.Title>주차장 위치</S.Title>
          <S.GoToMainBtn onClick={GoToMain}>X</S.GoToMainBtn>
        </S.HeadWrapper>
        <S.ContentsWrapper>
          <S.KakaoMap id="map"></S.KakaoMap>
        </S.ContentsWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

export default SmartParkLocationPage;
