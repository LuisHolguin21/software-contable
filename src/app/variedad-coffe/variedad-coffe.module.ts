import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariedadCoffePageRoutingModule } from './variedad-coffe-routing.module';

import { VariedadCoffePage } from './variedad-coffe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariedadCoffePageRoutingModule
  ],
  declarations: [VariedadCoffePage]
})
export class VariedadCoffePageModule {}
