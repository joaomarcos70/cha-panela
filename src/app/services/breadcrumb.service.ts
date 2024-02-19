import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadCrumbService {
  constructor() {}

  private breadCrumbs = new BehaviorSubject<BreadCrumb[]>([
    { label: 'Home', url: '/' },
  ]);
  breadCrumbs$ = this.breadCrumbs.asObservable();

  setBreadCrumbs(breadCrumbs: BreadCrumb) {
    const currentBreadCrumbs = this.breadCrumbs.getValue();
    currentBreadCrumbs.push(breadCrumbs);
    this.breadCrumbs.next(currentBreadCrumbs);
  }
}
