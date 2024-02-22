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
    return giftsList;
  }

  async getGift(id: string):Promise<IGift> {
    const gift = doc(this.db, 'gifts', id);
    const giftSnapshot = await getDoc(gift);
    const giftData = giftSnapshot.data();
    return giftData as IGift;
  }
}
