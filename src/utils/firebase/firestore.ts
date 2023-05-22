import { firebaseConfig } from "config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
