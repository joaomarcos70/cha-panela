import { Injectable } from '@angular/core';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { IGift } from '../shared/interfaces/gift.interface';

@Injectable({ providedIn: 'root' })
export class GiftService {
  private db = getFirestore();

  async getGifts() {
    const gifts = collection(this.db, 'gifts');
    const giftsSnapshot = await getDocs(gifts);
    const giftsList = giftsSnapshot.docs.map((doc) => doc.data() as IGift);
    return giftsList;
  }
}
