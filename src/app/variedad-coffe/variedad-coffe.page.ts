import { Component, OnInit } from '@angular/core';
import { VariedadesCafe } from '../variedades-cafe';
import { VariedadCafeService } from '../services/variedad-cafe.service';
import { Observable, map } from 'rxjs';

import { ToastController,NavController, LoadingController,
  ActionSheetController,AlertController
 } from '@ionic/angular';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-variedad-coffe',
  templateUrl: './variedad-coffe.page.html',
  styleUrls: ['./variedad-coffe.page.scss'],
})
export class VariedadCoffePage implements OnInit {

  variedades$!: VariedadesCafe[];

  constructor(
    private variedadCafeService: VariedadCafeService,
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

  async getVariedades():Promise<void>{
    (await this.variedadCafeService.getVariedades()).subscribe((variedades)=> {
      console.log(variedades);
      this.variedades$ = variedades;
  });
}
 ionViewDidEnter(){
  this.getVariedades();
 }

 async selectVariedad(variedad: any){
  let actionSheet = await this.actionSheetCtrl.create({
    header:"Que es lo que desea hacer?",
    buttons:[
      {
        text:"Borrar Variedad",
        role:"destructive",
        cssClass: 'action-sheet-delete',
        handler:() =>{
          this.borrar(variedad);
        }
      },  
      {
        text:"Modificar Variedad",
        handler:()=>{
          this.editar(variedad);
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

 async borrar(variedad:any){
  const alert = await this.alertCtrl.create({
    header:"Eliminar!",
    message:"Seguro desea elimar la variedad ?",
    buttons:[
      {
        text: "si",
        handler:() =>{
          this.variedadCafeService.borrarVariedad(variedad);
          this.getVariedades();
          this.mostrarMensaje("Variedad eliminada!");

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
async editar(variedad: any){
  this.router.navigate(["tabs/editarvariedad-cafe",variedad]);
}

}
