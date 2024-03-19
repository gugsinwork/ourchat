import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvGa8-Jgm3caicoEC_EADpbqhoXKeO51c",
  authDomain: "fala-ai-chat.firebaseapp.com",
  projectId: "fala-ai-chat",
  storageBucket: "fala-ai-chat.appspot.com",
  messagingSenderId: "614656402857",
  appId: "1:614656402857:web:adce3cce19fe1e34db50b8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
