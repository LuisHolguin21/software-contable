import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoempleadoPageRoutingModule } from './nuevoempleado-routing.module';

import { NuevoempleadoPage } from './nuevoempleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoempleadoPageRoutingModule
  ],
  declarations: [NuevoempleadoPage]
})
export class NuevoempleadoPageModule {}
