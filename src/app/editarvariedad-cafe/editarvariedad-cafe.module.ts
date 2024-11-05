import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarvariedadCafePageRoutingModule } from './editarvariedad-cafe-routing.module';

import { EditarvariedadCafePage } from './editarvariedad-cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarvariedadCafePageRoutingModule
  ],
  declarations: [EditarvariedadCafePage]
})
export class EditarvariedadCafePageModule {}
