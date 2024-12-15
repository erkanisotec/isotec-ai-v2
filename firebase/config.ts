import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTJs1pvZh67sUx1TwyLiSiEIyOm2l9q7A",
  authDomain: "ai-isotec.firebaseapp.com",
  projectId: "ai-isotec",
  storageBucket: "ai-isotec.appspot.com",
  messagingSenderId: "537503465197",
  appId: "1:537503465197:web:c49ee6eb7ecc417097d6e4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);