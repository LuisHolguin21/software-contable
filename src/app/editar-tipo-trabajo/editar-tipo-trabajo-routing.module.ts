import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTipoTrabajoPage } from './editar-tipo-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTipoTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTipoTrabajoPageRoutingModule {}
