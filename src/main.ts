import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './app/config/firebase.config';

initializeApp(firebaseConfig);

import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
registerLocaleData(localePtBr, 'pt-BR');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
