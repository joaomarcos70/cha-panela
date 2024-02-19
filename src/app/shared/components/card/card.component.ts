import { Component, Input, OnInit } from '@angular/core';
import { ReadMetaDataService } from '../../../services/read-meta-data.service';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() value: number = 0;
  @Input() img: string = '';
  @Input() link: string = '';
  @Input() buyed: boolean = false;
}
