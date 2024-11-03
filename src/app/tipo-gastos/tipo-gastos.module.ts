import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoGastosPageRoutingModule } from './tipo-gastos-routing.module';

import { TipoGastosPage } from './tipo-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoGastosPageRoutingModule
  ],
  declarations: [TipoGastosPage]
})
export class TipoGastosPageModule {}
