import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoempleadoPage } from './nuevoempleado.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoempleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoempleadoPageRoutingModule {}
