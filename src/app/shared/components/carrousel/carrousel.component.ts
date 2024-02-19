import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DocumentData } from 'firebase/firestore';
import { IGift } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent {
  @Input() items: IGift[] = [];
}
