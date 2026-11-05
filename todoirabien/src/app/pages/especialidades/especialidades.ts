
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './especialidades.html',
  styleUrl: './especialidades.css'
})
export class Especialidades {}
