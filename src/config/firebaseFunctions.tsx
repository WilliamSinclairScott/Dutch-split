import { noSQLdb } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const submitData = async (data: string) => {
  try {
    const docRef = await addDoc(collection(noSQLdb, "test-collection"), {
      nonsense: data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const fetchDivvyData = async ( props ) => {
  console.log("Fetching divvy data");
}