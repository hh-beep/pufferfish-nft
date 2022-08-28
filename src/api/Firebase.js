import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyAX5exX3BosOQ-Qb8KqKBBmTb7khzjzIJs",
  authDomain: "pufferfish-nft.firebaseapp.com",
  databaseURL: "https://pufferfish-nft-default-rtdb.firebaseio.com",
  projectId: "pufferfish-nft",
  storageBucket: "pufferfish-nft.appspot.com",
  messagingSenderId: "347100824010",
  appId: "1:347100824010:web:5cac847e74350511d30f33",
  measurementId: "G-SL7HQW428S"
};




const initializeFirebase = () => { 
  initializeApp(firebaseConfig) 
  getDatabase(initializeApp(firebaseConfig))
}

export default initializeFirebase