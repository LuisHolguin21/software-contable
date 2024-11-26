import { Component, OnInit } from '@angular/core';
import { gastos } from '../gastos'; // Asegúrate de que esto sea correcto
import { gastosService } from '../services/gastos.service'; // Asegúrate de usar 'GastosService'
import { ToastController, NavController, LoadingController,ActionSheetController, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,map } from 'rxjs';

@Component({
  selector: 'app-gastos',
  templateUrl: './tipo-gasto.page.html',
  styleUrls: ['./tipo-gasto.page.scss'],
})
export class TipoGastoPage implements OnInit {

  Gastos$!: gastos[];

  constructor(
    private gastosService: gastosService,
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

async getTipogasto():Promise<void>{
   (await this.gastosService.getTipogasto()).subscribe((Gastos)=> {
      console.log(Gastos);
      this.Gastos$ = Gastos;
  });
}



 ionViewDidEnter(){
  this.getTipogasto();
 }

 async selectGasto(gastos: any){
  let actionSheet = await this.actionSheetCtrl.create({
    header:"Que es lo que desea hacer?",
    buttons:[
      {
        text:"Borrar gasto",
        role:"destructive",
        cssClass: 'action-sheet-delete',
        handler:() =>{
          this.borrar(gastos);
        }
      },  
      {
        text:"Modificar gasto",
        handler:()=>{
          this.editar(gastos);
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

 async borrar(gastos:any){
  const alert = await this.alertCtrl.create({
    header:"Eliminar!",
    message:"Seguro desea elimar la gasto ?",
    buttons:[
      {
        text: "si",
        handler:() =>{
          this.gastosService.borrarGastos(gastos);
          this.getTipogasto();
          this.mostrarMensaje("gosto eliminada!");

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
async editar(gastos: any){
  this.router.navigate(["tabs/editar-tipogasto",gastos]);
}

}