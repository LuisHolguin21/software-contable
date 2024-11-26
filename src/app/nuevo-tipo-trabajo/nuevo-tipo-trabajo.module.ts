import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTipoTrabajoPageRoutingModule } from './nuevo-tipo-trabajo-routing.module';

import { NuevoTipoTrabajoPage } from './nuevo-tipo-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTipoTrabajoPageRoutingModule
  ],
  declarations: [NuevoTipoTrabajoPage]
})
export class NuevoTipoTrabajoPageModule {}
