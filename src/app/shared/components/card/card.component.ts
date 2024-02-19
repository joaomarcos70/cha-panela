import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CurrencyPipe } from '@angular/common';
import { BreadCrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(
    private router: Router,
    private breadcrumbService: BreadCrumbService
  ) {}
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() value: number = 0;
  @Input() img: string = '';
  @Input() link: string = '';
  @Input() buyed: boolean = false;

  buy(id: string) {
    console.log(id);
    this.breadcrumbService.setBreadCrumbs({
      label: 'Presente',
      url: `/presente/${id}`,
    });
    this.router.navigate([`/presente`, id]);
  }
}
