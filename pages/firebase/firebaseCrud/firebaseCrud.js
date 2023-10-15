import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from "react";

const database = firebaseConfig();

function FirebaseCrud() {
  let [username, setUsername] = useState("");
  let [fullname, setFullname] = useState("");
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");

  let isNullOrWhiteSpaces = (value) => {
    value = value.toString();
    return value == null || value.replaceAll(" ", "").length < 1;
  };

  let InsertData = () => {
    if (
      isNullOrWhiteSpaces(username) ||
      isNullOrWhiteSpaces(fullname) ||
      isNullOrWhiteSpaces(phone) ||
      isNullOrWhiteSpaces(dob)
    ) {
      alert("fill all the fields");
      return;
    }
    set(ref(database, "Customer/" + username), {
      fullname: fullname,
      phonenumber: phone,
      dateofbirth: dob,
    });
  };

  let SelectData = () => {
    const dbref = ref(database);

    get(child(dbref, "Customer/" + username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFullname(snapshot.val().fullname);
          setPhone(snapshot.val().phonenumber);
          setDob(snapshot.val().dateofbirth);
        } else {
          alert("no data available");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  return (
    <>
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label>full name</label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
      <br />
      <label>phone number</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <label>Dob</label>
      <input
        type="text"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
      />
      <br />

      <button onClick={InsertData}>Insert username</button>
      <button>update Data</button>
      <button>delete Data</button>
      <button onClick={SelectData}>Select Data</button>
    </>
  );
}

export default FirebaseCrud;
