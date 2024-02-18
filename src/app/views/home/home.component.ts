import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { GiftService } from '../../services/gifts.service';
import { DocumentData } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gifts: DocumentData[] = [];

  constructor(private giftService: GiftService) {}

  async ngOnInit() {
    this.gifts = await this.giftService.getGifts();
    console.log('gifts', this.gifts);
  }
}
