import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTipoGastoPage } from './nuevo-tipo-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTipoGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTipoGastoPageRoutingModule {}
