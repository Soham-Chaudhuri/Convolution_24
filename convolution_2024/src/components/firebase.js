import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoidI8s1fNwC15jFUnB111iRJbVSnCN78",
  authDomain: "convo-test-e2385.firebaseapp.com",
  projectId: "convo-test-e2385",
  storageBucket: "convo-test-e2385.appspot.com",
  messagingSenderId: "352444834954",
  appId: "1:352444834954:web:147f108e9e6c51ab3ef973",
  databaseURL: "https://convo-test-e2385-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
