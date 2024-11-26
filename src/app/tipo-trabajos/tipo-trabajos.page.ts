import { Component, OnInit } from '@angular/core';
import { Trabajos } from '../trabajos';
import { TipoTrabajoService } from '../services/tipotrabajos.service';
import { Observable, map } from 'rxjs';

import { ToastController,NavController, LoadingController,
  ActionSheetController,AlertController
 } from '@ionic/angular';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-trabajos',
  templateUrl: './tipo-trabajos.page.html',
  styleUrls: ['./tipo-trabajos.page.scss'],
})
export class TipoTrabajosPage implements OnInit {

  tipotrabajos$!: Trabajos[];

  constructor(
    private tipoTrabajosService: TipoTrabajoService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  async getTipotrabajos():Promise<void>{
    (await this.tipoTrabajosService.getTipotrabajos()).subscribe((tipotrabajos)=> {
      console.log(tipotrabajos);
      this.tipotrabajos$ = tipotrabajos;
  });
}
 ionViewDidEnter(){
  this.getTipotrabajos();
 }

 async selectTipoTrabajo(tipotrabajo: any){
  let actionSheet = await this.actionSheetCtrl.create({
    header:"Que es lo que desea hacer?",
    buttons:[
      {
        text:"Borrar tipo de trabajo",
        role:"destructive",
        cssClass: 'action-sheet-delete',
        handler:() =>{
          this.borrar(tipotrabajo);
        }
      },  
      {
        text:"Modificar Tipo de trabajo",
        handler:()=>{
          this.editar(tipotrabajo);
        }
      },
      {
        text: "Cancelar",
        role: "cancel",
        cssClass: 'action-sheet-cancel',
        handler:()=>{
          console.log('Cancelado')
        } 
      }
    ]

  });
  await actionSheet.present();
 }

 async borrar(tipotrabajo:any){
  const alert = await this.alertCtrl.create({
    header:"Eliminar!",
    message:"Seguro desea elimar el tipo de trabajo ?",
    buttons:[
      {
        text: "si",
        handler:() =>{
          this.tipoTrabajosService.borrarTipotrabajos(tipotrabajo);
          this.getTipotrabajos();
          this.mostrarMensaje("Tipo de trabajo eliminado!");

        }
      },
      {
        text:"No",
        role:"cancel",
        cssClass: "secondary"
      }
    ]
  });
  await alert.present();
}

mostrarMensaje (mensaje: string){
  this.toastCtrl.create({
    duration:2000
  }).then(toast => toast.present());
}
async editar(tipotrabajo: any){
  this.router.navigate(["tabs/editar-tipo-trabajo",tipotrabajo]);
}

}
