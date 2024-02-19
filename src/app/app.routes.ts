import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContextGiftComponent } from './views/context-gift/context-gift.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'presente/:id',
    component: ContextGiftComponent,
  },
];
