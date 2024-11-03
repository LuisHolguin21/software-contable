import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoGastosPage } from './tipo-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: TipoGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoGastosPageRoutingModule {}
