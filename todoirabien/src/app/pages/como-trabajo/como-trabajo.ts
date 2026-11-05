
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-como-trabajo',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './como-trabajo.html',
  styleUrl: './como-trabajo.css'
})
export class ComoTrabajo {}
