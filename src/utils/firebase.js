// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2wnNjqgmT4qeIi09jp70203rV9OvOkUk",
  authDomain: "netflix-gpt-80d80.firebaseapp.com",
  projectId: "netflix-gpt-80d80",
  storageBucket: "netflix-gpt-80d80.appspot.com",
  messagingSenderId: "47893685041",
  appId: "1:47893685041:web:fe9c8f4f925c3d84ba8610",
  measurementId: "G-6XPW0CK355",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// export const auth = getAuth(firebaseConfig);
// const firestore = getFirestore(firebaseConfig);

//Detect auth state changed
// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in");
//   } else {
//     console.log("No user");
//   }
// });
