import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoTrabajosPageRoutingModule } from './tipo-trabajos-routing.module';

import { TipoTrabajosPage } from './tipo-trabajos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoTrabajosPageRoutingModule
  ],
  declarations: [TipoTrabajosPage]
})
export class TipoTrabajosPageModule {}
