import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarjornaleroPage } from './editarjornalero.page';

const routes: Routes = [
  {
    path: '',
    component: EditarjornaleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarjornaleroPageRoutingModule {}
