import firebaseConfig from "../firebaseConfig/firebaseConfig";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
} from "firebase/database";

const database = firebaseConfig();

export const fetchData = () => {
  const dbref = ref(database);

  get(child(dbref, "Customer/")).then((snapshot) => {
    const data = snapshot.val();
    console.log(data);
    return data;
  });
};
