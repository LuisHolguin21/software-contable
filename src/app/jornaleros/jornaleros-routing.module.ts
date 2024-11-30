import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JornalerosPage } from './jornaleros.page';

const routes: Routes = [
  {
    path: '',
    component: JornalerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JornalerosPageRoutingModule {}
