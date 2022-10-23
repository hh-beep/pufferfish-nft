import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyA2Ozp7SGyxP1Fo6hOaUwMVTH0RzFqXayo",
  authDomain: "pufferfish-nft-b9123.firebaseapp.com",
  databaseURL: "https://pufferfish-nft-b9123-default-rtdb.firebaseio.com",
  projectId: "pufferfish-nft-b9123",
  storageBucket: "pufferfish-nft-b9123.appspot.com",
  messagingSenderId: "789331231894",
  appId: "1:789331231894:web:f7c2f257736af0b217eeb7",
  measurementId: "G-585Y2HL0G9"
};




const initializeFirebase = () => { 
  initializeApp(firebaseConfig) 
  getDatabase(initializeApp(firebaseConfig))
}

export default initializeFirebase