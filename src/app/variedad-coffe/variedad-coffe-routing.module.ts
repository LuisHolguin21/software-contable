import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariedadCoffePage } from './variedad-coffe.page';

const routes: Routes = [
  {
    path: '',
    component: VariedadCoffePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariedadCoffePageRoutingModule {}
