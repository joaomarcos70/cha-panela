import { Injectable } from '@angular/core';
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { IGift } from '../shared/interfaces/gift.interface';

@Injectable({ providedIn: 'root' })
export class GiftService {
  private db = getFirestore();

  async getGifts() {
    const gifts = collection(this.db, 'gifts');
    const giftsSnapshot = await getDocs(gifts);
    const giftsList = giftsSnapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return {
        id,
        ...data,
      } as IGift;
    });
    console.log(giftsList);
    return giftsList;
  }

  async getGift(id: string) {
    const gift = doc(this.db, 'gifts', id);
    if (!gift) {
      return null;
    }
    const giftSnapshot = await getDoc(gift); // Change getDocs to getDoc
    const giftData = giftSnapshot.data();
    return giftData;
  }
}
