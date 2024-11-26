import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTipogastoPageRoutingModule } from './editar-tipogasto-routing.module';

import { EditarTipogastoPage } from './editar-tipogasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTipogastoPageRoutingModule
  ],
  declarations: [EditarTipogastoPage]
})
export class EditarTipogastoPageModule {}
