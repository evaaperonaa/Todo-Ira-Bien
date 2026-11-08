
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
    path: 'areas-de-trabajo',
    component: Especialidades
  },
  {
    path: 'psico-general',
    component: PsicoGeneral
  },
  {
    path: 'psico-forense',
    component: PsicoForense
  },
  {
    path: 'sex-coaching',
    component: SexCoaching
  },
  {
    path: 'psico-organizaciones',
    component: PsicoOrganizaciones
  },
  {
    path: 'cita',
    loadComponent: () =>
      import('./pages/cita/cita').then(m => m.Cita)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
