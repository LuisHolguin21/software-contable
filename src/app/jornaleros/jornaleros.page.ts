import { Component, OnInit } from '@angular/core';
import { JornaleroData } from '../jornalerodata';
import { JornaleroService } from '../services/jornalero.service';
import { Observable, map } from 'rxjs';

import { ToastController,NavController, LoadingController,
  ActionSheetController,AlertController
 } from '@ionic/angular';
 import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jornaleros',
  templateUrl: './jornaleros.page.html',
  styleUrls: ['./jornaleros.page.scss'],
})
export class JornalerosPage implements OnInit {

  jornaleros$!: JornaleroData[];

  constructor(
    private jornaleroService: JornaleroService,
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

  async getJornaleros():Promise<void>{
    (await this.jornaleroService.getJornaleros()).subscribe((jornaleros)=> {
      console.log(jornaleros);
      this.jornaleros$ = jornaleros;
  });
}
 ionViewDidEnter(){
  this.getJornaleros();
 }

 async selectJornalero(jornalero: any){
  let actionSheet = await this.actionSheetCtrl.create({
    header:"Que es lo que desea hacer?",
    buttons:[
      {
        text:"Borrar Variedad",
        role:"destructive",
        cssClass: 'action-sheet-delete',
        handler:() =>{
          this.borrar(jornalero);
        }
      },  
      {
        text:"Modificar Variedad",
        handler:()=>{
          this.editar(jornalero);
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

 async borrar(jornalero:any){
  const alert = await this.alertCtrl.create({
    header:"Eliminar!",
    message:"Seguro desea elimar la variedad ?",
    buttons:[
      {
        text: "si",
        handler:() =>{
          this.jornaleroService.borrarJornalero(jornalero);
          this.getJornaleros();
          this.mostrarMensaje("Jornalero eliminado!");

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
async editar(jornalero: any){
  this.router.navigate(["tabs/editarjornalero",jornalero]);
}

}
