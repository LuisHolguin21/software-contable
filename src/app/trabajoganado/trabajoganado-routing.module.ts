import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajoganadoPage } from './trabajoganado.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajoganadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajoganadoPageRoutingModule {}
