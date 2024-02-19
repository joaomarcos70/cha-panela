import { Component } from '@angular/core';
import {
  BreadCrumb,
  BreadCrumbService,
} from '../../../services/breadcrumb.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  items: BreadCrumb[] = [];
  constructor(
    private breadcrumbService: BreadCrumbService,
    private router: Router,
    private breadCrumbService: BreadCrumbService
  ) {
    this.breadcrumbService.breadCrumbs$.subscribe((breadCrumbs) => {
      this.items = breadCrumbs;
    });
  }

  navigateTo(url: string) {
    this.breadCrumbService.setBreadCrumbs({ label: 'Home', url: '/' });
    this.router.navigate([url]);
  }
}
