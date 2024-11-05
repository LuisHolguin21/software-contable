import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaVariedadPageRoutingModule } from './nueva-variedad-routing.module';

import { NuevaVariedadPage } from './nueva-variedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaVariedadPageRoutingModule
  ],
  declarations: [NuevaVariedadPage]
})
export class NuevaVariedadPageModule {}
