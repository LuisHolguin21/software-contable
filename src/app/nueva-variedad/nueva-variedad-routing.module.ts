import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaVariedadPage } from './nueva-variedad.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaVariedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaVariedadPageRoutingModule {}
