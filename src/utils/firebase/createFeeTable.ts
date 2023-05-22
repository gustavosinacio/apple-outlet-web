import { defaultConfig } from "config/initialConfig";
import { VALUES_DOC, VERSION_COLLECTION } from "consts/strings";
import { doc, Firestore, setDoc } from "firebase/firestore";

export async function createTable(db: Firestore) {
  try {
    const docRef = doc(db, VERSION_COLLECTION, VALUES_DOC);
    setDoc(docRef, {
      fees: [...defaultConfig.installments],
      embededTexts: [...defaultConfig.embededTexts],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
