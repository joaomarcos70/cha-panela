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
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() url: string = '';
}
