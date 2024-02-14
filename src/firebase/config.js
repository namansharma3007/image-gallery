import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6sMzvVhcKKyzdcQrcbe-1dnoO9OVZyRI",
  authDomain: "image-galary-3435e.firebaseapp.com",
  projectId: "image-galary-3435e",
  storageBucket: "image-galary-3435e.appspot.com",
  messagingSenderId: "52138994429",
  appId: "1:52138994429:web:c0d51e3f6e2da933f62c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth, storage, db};