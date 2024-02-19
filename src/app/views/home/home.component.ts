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

  paraServirCategory: IGift[] = [];
  cozinhaCategory: IGift[] = [];
  banheiroCategory: IGift[] = [];
  sonoCategory: IGift[] = [];
  othersCategory: IGift[] = [];

  loading: boolean = true;

  constructor(private giftService: GiftService) {}

  async ngOnInit() {
    try {
      await this.giftService
        .getGifts()
        .then((gifts) => {
          this.gifts = gifts;
          this.distributeGifts();
        })
        .finally(() => {
          this.loading = false;
        });
    } catch (error) {
      console.error(error);
    }
  }

  distributeGifts() {
    const categoryMap: { [key: string]: IGift[] } = {
      para_servir: this.paraServirCategory,
      cozinha: this.cozinhaCategory,
      sono: this.banheiroCategory,
      banheiro: this.sonoCategory,
    };

    this.gifts.forEach((gift) => {
      if (categoryMap[gift.category]) {
        categoryMap[gift.category].push(gift);
      } else {
        this.othersCategory.push(gift);
      }
    });
  }
}
