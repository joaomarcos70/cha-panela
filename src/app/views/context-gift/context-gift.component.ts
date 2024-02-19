import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiftService } from '../../services/gifts.service';

@Component({
  selector: 'app-context-gift',
  standalone: true,
  imports: [],
  templateUrl: './context-gift.component.html',
  styleUrl: './context-gift.component.scss',
})
export class ContextGiftComponent implements OnInit {
  id = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private giftService: GiftService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.giftService.getGift(this.id).then((gift) => {
      console.log(gift);
    });
  }
}
