import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6hAQ_lpWd3ipqXM1cReewzfHwDmXZWxs",
  authDomain: "art-gallery-angelina.firebaseapp.com",
  databaseURL:
    "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "art-gallery-angelina",
  storageBucket: "art-gallery-angelina.appspot.com",
  messagingSenderId: "1082365389511",
  appId: "1:1082365389511:web:3174d2fcb6b127c82eace2",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getDatabase(app) 