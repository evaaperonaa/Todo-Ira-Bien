
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';

import {
  provideTranslateService,
  TranslateLoader
} from '@ngx-translate/core';

import { Observable } from 'rxjs';

import { routes } from './app.routes';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get<Record<string, string>>(
      `/assets/i18n/${lang}.json`
    );
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      },
      fallbackLang: 'es',
      lang: 'es'
    })
  ]
};
