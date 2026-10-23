
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translate = inject(TranslateService);

  idiomaActual = 'es';
  menuIdiomasAbierto = false;

  cambiarIdioma(idioma: string) {
    this.idiomaActual = idioma;
    this.translate.use(idioma);
    this.menuIdiomasAbierto = false;
  }

  alternarMenuIdiomas() {
    this.menuIdiomasAbierto = !this.menuIdiomasAbierto;
  }
}
