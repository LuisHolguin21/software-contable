import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTipoTrabajoPageRoutingModule } from './editar-tipo-trabajo-routing.module';

import { EditarTipoTrabajoPage } from './editar-tipo-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTipoTrabajoPageRoutingModule
  ],
  declarations: [EditarTipoTrabajoPage]
})
export class EditarTipoTrabajoPageModule {}
