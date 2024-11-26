import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTipoGastoPageRoutingModule } from './nuevo-tipo-gasto-routing.module';

import { NuevoTipoGastoPage } from './nuevo-tipo-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTipoGastoPageRoutingModule
  ],
  declarations: [NuevoTipoGastoPage]
})
export class NuevoTipoGastoPageModule {}
