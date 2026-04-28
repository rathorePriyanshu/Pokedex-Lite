import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrQ2TRQ8itxB1qrDOfBh4OA1TUJPWPA7M",
  authDomain: "pokedex-d2538.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
