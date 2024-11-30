import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarjornaleroPageRoutingModule } from './editarjornalero-routing.module';

import { EditarjornaleroPage } from './editarjornalero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarjornaleroPageRoutingModule
  ],
  declarations: [EditarjornaleroPage]
})
export class EditarjornaleroPageModule {}
