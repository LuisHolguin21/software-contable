import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevojornaleroPage } from './nuevojornalero.page';

const routes: Routes = [
  {
    path: '',
    component: NuevojornaleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevojornaleroPageRoutingModule {}
