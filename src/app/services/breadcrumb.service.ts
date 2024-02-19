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
    const existingIndex = currentBreadCrumbs.findIndex(
      (bc) => bc.url === breadCrumbs.url
    );
    if (existingIndex !== -1) {
      const newBreadCrumbs = currentBreadCrumbs.slice(0, existingIndex + 1);
      this.breadCrumbs.next(newBreadCrumbs);
    } else {
      this.breadCrumbs.next([...currentBreadCrumbs, breadCrumbs]);
    }
  }
}
