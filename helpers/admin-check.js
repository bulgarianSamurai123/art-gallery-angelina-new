import { get, ref } from "firebase/database";
import { db } from "./firebase";

export async function isAdmin(uid) {
  const snapshot = await get(ref(db, `users/${uid}/role`));
  return snapshot.exists() && snapshot.val() === "admin";
}