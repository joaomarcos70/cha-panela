import { Component } from '@angular/core';
import { GiftService } from '../../services/gifts.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { CarrouselComponent } from '../../shared/components/carrousel/carrousel.component';
import { IGift } from '../../shared/interfaces/gift.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gifts: IGift[] = [];
  loading: boolean = true;

  constructor(private giftService: GiftService) {}

  async ngOnInit() {
    await this.giftService.getGifts().then((gifts) => {
      this.gifts = gifts;
      this.loading = false;
    });
  }
}
