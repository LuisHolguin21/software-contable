import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoGastoPage } from './tipo-gasto.page'; // Asegúrate de que esta ruta sea correcta

const routes: Routes = [
  {
    path: '',
    component: TipoGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoGastoPageRoutingModule {}