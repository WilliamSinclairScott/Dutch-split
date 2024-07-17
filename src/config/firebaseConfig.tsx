// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTSWXZahBCaZYRXM6FGe8rmsxTjSzgD9Y",
  authDomain: "chatroomexample-8ba3e.firebaseapp.com",
  databaseURL: "https://chatroomexample-8ba3e-default-rtdb.firebaseio.com",
  projectId: "chatroomexample-8ba3e",
  storageBucket: "chatroomexample-8ba3e.appspot.com",
  messagingSenderId: "185520097891",
  appId: "1:185520097891:web:1c1cd1e2762dff06b30656",
  measurementId: "G-9HFZC71LGM"
};

// Initialize Firebase
const fbc = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fbc;
export const noSQLdb = getFirestore(fbc);