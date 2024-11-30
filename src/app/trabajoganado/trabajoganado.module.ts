import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { TrabajoganadoPageRoutingModule } from './trabajoganado-routing.module';

import { TrabajoganadoPage } from './trabajoganado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TrabajoganadoPageRoutingModule
  ],
  declarations: [TrabajoganadoPage]
})
export class TrabajoganadoPageModule {}
