import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevojornaleroPageRoutingModule } from './nuevojornalero-routing.module';

import { NuevojornaleroPage } from './nuevojornalero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevojornaleroPageRoutingModule
  ],
  declarations: [NuevojornaleroPage]
})
export class NuevojornaleroPageModule {}
