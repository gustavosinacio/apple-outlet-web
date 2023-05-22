import { VALUES_DOC, VERSION_COLLECTION } from "consts/strings";
import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  getDoc,
} from "firebase/firestore";
import { FeesSnapshotData } from "types/installments";

export async function getVersionSnapshot(firestore: Firestore) {
  try {
    const colRef = collection(
      firestore,
      VERSION_COLLECTION
    ) as CollectionReference<FeesSnapshotData>;
    const docRef = doc<FeesSnapshotData>(colRef, VALUES_DOC);

    const docSnap = await getDoc<FeesSnapshotData>(docRef);

    if (docSnap.exists()) {
      const snapshotData = docSnap.data();

      return snapshotData;
    } else {
      console.warn("982187, Data not found!");
      return {
        fees: [],
        embededTexts: [],
      };
    }
  } catch (error) {
    return {
      fees: [],
      embededTexts: [],
    };
  }
}
