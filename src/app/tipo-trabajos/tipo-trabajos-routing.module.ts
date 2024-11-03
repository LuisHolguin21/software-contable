import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoTrabajosPage } from './tipo-trabajos.page';

const routes: Routes = [
  {
    path: '',
    component: TipoTrabajosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoTrabajosPageRoutingModule {}
