import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTipoTrabajoPage } from './nuevo-tipo-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTipoTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTipoTrabajoPageRoutingModule {}
