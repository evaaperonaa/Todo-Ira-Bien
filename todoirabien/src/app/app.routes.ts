
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ComoTrabajo } from './pages/como-trabajo/como-trabajo';
import { Especialidades } from './pages/especialidades/especialidades';
import { PsicoGeneral } from './pages/psico-general/psico-general';
import { PsicoForense } from './pages/psico-forense/psico-forense';
import { SexCoaching } from './pages/sex-coaching/sex-coaching';
import { PsicoOrganizaciones } from './pages/psico-organizaciones/psico-organizaciones';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'como-trabajo',
    component: ComoTrabajo
  },
  {
    path: 'especialidades',
    component: Especialidades
  },
  {
    path: 'especialidades/psico-general',
    component: PsicoGeneral
  },
  {
    path: 'especialidades/psico-forense',
    component: PsicoForense
  },
  {
    path: 'especialidades/sex-coaching',
    component: SexCoaching
  },
  {
    path: 'especialidades/psico-organizaciones',
    component: PsicoOrganizaciones
  },
  {
    path: '**',
    redirectTo: ''
  }
];
