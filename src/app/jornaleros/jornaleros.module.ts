import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JornalerosPageRoutingModule } from './jornaleros-routing.module';

import { JornalerosPage } from './jornaleros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JornalerosPageRoutingModule
  ],
  declarations: [JornalerosPage]
})
export class JornalerosPageModule {}
