import * as S from "../../styles/SmartParkSlotStyles";
import { firebaseConfig } from "../../firebase/firebaseConfig/firebaseConfig";
import { ref, get, child, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const database = firebaseConfig();

function SmartParkSlotPage() {
  const [slots1, setSlots1] = useState([]); // 슬롯 데이터를 저장할 상태
  const [slots2, setSlots2] = useState([]);
  const [slots3, setSlots3] = useState([]);
  const [slots4, setSlots4] = useState([]);
  const [specialSlot, setSpecialSlot] = useState([]);
  const [falseSlot, setFalseSlot] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const dbRef = ref(database);

    const slotsArray1 = [];
    const slotsArray2 = [];
    const slotsArray3 = [];
    const slotsArray4 = [];

    const fetchData = () => {
      for (let i = 0; i <= 4; i++) {
        const slotNumber = i.toString().padStart(2, "0");
        const slotRef = child(dbRef, `slot_${slotNumber}`);

        onValue(slotRef, (snapshot) => {
          if (snapshot.exists()) {
            const slotData = snapshot.val();
            if (slotsArray1[i] === false && slotData === true) {
              if (i === 3 || i === 4) {
                specialSlot.pop();
              } else {
                falseSlot.pop();
              }
            }
            slotsArray1[i] = slotData;
            if ((!slotData && i === 3) || (!slotData && i === 4)) {
              specialSlot.push(slotData);
            } else if (!slotData) {
              falseSlot.push(slotData);
            }

            // Update state if needed
            setSlots1([...slotsArray1]); // Make a new copy of the array to trigger a re-render
          }
        });
      }
      for (let i = 5; i <= 9; i++) {
        const slotNumber = i.toString().padStart(2, "0");
        const slotRef = child(dbRef, `slot_${slotNumber}`);

        onValue(slotRef, (snapshot) => {
          if (snapshot.exists()) {
            const slotData = snapshot.val();
            if (slotsArray2[i - 5] === false && slotData === true) {
              falseSlot.pop();
            }
            slotsArray2[i - 5] = slotData;
            if (!slotData) {
              falseSlot.push(slotData);
            }
            // Update state if needed
            setSlots2([...slotsArray2]); // Make a new copy of the array to trigger a re-render
          }
        });
      }
      for (let i = 10; i <= 14; i++) {
        // const slotNumber = i.toString().padStart(2, "0");
        const slotRef = child(dbRef, `slot_${i}`);

        onValue(slotRef, (snapshot) => {
          if (snapshot.exists()) {
            const slotData = snapshot.val();
            if (slotsArray3[i - 10] === false && slotData === true) {
              falseSlot.pop();
            }
            slotsArray3[i - 10] = slotData;
            if (!slotData) {
              falseSlot.push(slotData);
            }
            // Update state if needed
            setSlots3([...slotsArray3]); // Make a new copy of the array to trigger a re-render
          }
        });
      }
      for (let i = 15; i <= 19; i++) {
        // const slotNumber = i.toString().padStart(2, "0");
        const slotRef = child(dbRef, `slot_${i}`);

        onValue(slotRef, (snapshot) => {
          if (snapshot.exists()) {
            const slotData = snapshot.val();
            if (slotsArray4[i - 15] === false && slotData === true) {
              falseSlot.pop();
            }
            slotsArray4[i - 15] = slotData;
            if (!slotData) {
              falseSlot.push(slotData);
            }
            // Update state if needed
            setSlots4([...slotsArray4]); // Make a new copy of the array to trigger a re-render
          }
        });
      }
    };

    fetchData();
  }, []);

  const GoToMain = () => {
    router.push("/");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.HeadWrapper>
          <S.Title>주차 현황</S.Title>
          <S.GoToMainBtn onClick={GoToMain}>X</S.GoToMainBtn>
        </S.HeadWrapper>

        <S.InAndOut>
          <S.In>입구</S.In>
          <S.Out>출구</S.Out>
        </S.InAndOut>

        <S.ContentsWrapper>
          <S.SlotBox>
            {slots1.map((slot, index) => (
              <S.Slot
                style={{ backgroundColor: slot ? "#E02828" : "#008200" }}
                key={`slot_${index}`}
              >
                <FontAwesomeIcon
                  visibility={index === 3 ? "" : index === 4 ? "" : "hidden"}
                  icon={faWheelchair}
                />
              </S.Slot>
            ))}
          </S.SlotBox>
          <S.SlotWrapper>
            <div>
              {slots2.map((slot, index) => (
                <S.Slot
                  style={{ backgroundColor: slot ? "#E02828" : "#008200" }}
                  key={`slot_${index}`}
                ></S.Slot>
              ))}
            </div>
            <div>
              {" "}
              {slots3.map((slot, index) => (
                <S.Slot
                  style={{ backgroundColor: slot ? "#E02828" : "#008200" }}
                  key={`slot_${index}`}
                ></S.Slot>
              ))}
            </div>
          </S.SlotWrapper>
          <S.SlotBox2>
            {slots4.map((slot, index) => (
              <S.Slot
                style={{ backgroundColor: slot ? "#E02828" : "#008200" }}
                key={`slot_${index}`}
              ></S.Slot>
            ))}
          </S.SlotBox2>
        </S.ContentsWrapper>
        <S.Count>빈 자리:{falseSlot.length}</S.Count>
        <S.Count>장애인 전용 주차구역 빈 자리:{specialSlot.length}</S.Count>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

export default SmartParkSlotPage;
