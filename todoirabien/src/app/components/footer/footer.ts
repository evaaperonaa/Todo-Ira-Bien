import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  constructor(private translate: TranslateService) { }

  idiomaLegal(castellano: string, valenciano: string): string {
    return this.translate.currentLang() === 'va'
      ? valenciano
      : castellano;
  }
}


