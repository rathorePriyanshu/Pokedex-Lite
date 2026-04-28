import { useEffect, useState } from "react";
import { auth, provider } from "./Firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, login, logout };
};
