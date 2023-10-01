import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAMSZFR6v7YHBXOhP1g7umdlzxX0t6hfnY",
    authDomain: "prectice-firebase-projects.firebaseapp.com",
    projectId: "prectice-firebase-projects",
    storageBucket: "prectice-firebase-projects.appspot.com",
    messagingSenderId: "397303413190",
    appId: "1:397303413190:web:3f2f75ae47f0e60c35dac7"
  };
  const app = initializeApp(firebaseConfig);
  export const auth =getAuth(app);