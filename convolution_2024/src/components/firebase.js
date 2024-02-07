import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDwZqkhELEbMHWJP-nUQx1JnEQbdvOML0",
  authDomain: "convo1-542d5.firebaseapp.com",
  projectId: "convo1-542d5",
  storageBucket: "convo1-542d5.appspot.com",
  messagingSenderId: "1069665287756",
  appId: "1:1069665287756:web:2c2e7e49f6c72c335dbee9",
  databaseURL: "https://convo1-542d5-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
