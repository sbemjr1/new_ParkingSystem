import * as S from "../../styles/SmartParkNoticeStyles";
import firebaseConfig from "../../pages/firebase/firebaseConfig/firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const database = firebaseConfig();

function SmartParkNoticePage() {
  let [contents, setContents] = useState("");
  let [phone, setPhone] = useState("");
  let [data, setData] = useState("");

  const router = useRouter();

  let isNullOrWhiteSpaces = (value) => {
    value = value.toString();
    return value == null || value.replaceAll(" ", "").length < 1;
  };

  let InsertData = () => {
    if (isNullOrWhiteSpaces(contents) || isNullOrWhiteSpaces(phone)) {
      alert("fill all the fields");
      return;
    }
    set(ref(database, "Customer/" + contents), {
      phone: phone,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbref = ref(database);

        get(child(dbref, "Customer/")).then((snapshot) => {
          const data = snapshot.val();
          console.log(Object.keys(data));
          setData(Object.keys(data));
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터 가져오는 함수 호출
  }, []);

  const GoToMain = () => {
    router.push("/");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.HeadWrapper>
          <S.Title>공지 및 문의</S.Title>
          <S.GoToMainBtn onClick={GoToMain}>X</S.GoToMainBtn>
        </S.HeadWrapper>
        <S.ContentsWrapper>
          <S.ListWrapper>
            {Object.keys(data).map((key) => (
              <div key={key}>
                {Number(key) + 1} - {data[key]}
              </div>
            ))}
          </S.ListWrapper>
          <S.InputWrapper>
            <S.ContentsInput
              type="text"
              value={contents}
              placeholder="문의 사항을 입력해주세요."
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
            <S.PhoneInput
              type="text"
              value={phone}
              placeholder="전화 번호를 입력해주세요."
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <S.SubmitBtn type="button" onClick={InsertData}>
              전송
            </S.SubmitBtn>
          </S.InputWrapper>
        </S.ContentsWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

export default SmartParkNoticePage;
