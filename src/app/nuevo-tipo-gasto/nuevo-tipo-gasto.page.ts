import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { TipoGastoPage } from '../tipo-gasto/tipo-gasto.page';
import { gastos } from '../gastos';
import { gastosService } from '../services/gastos.service';

@Component({
  selector: 'app-nuevo-tipo-gasto',
  templateUrl: './nuevo-tipo-gasto.page.html',
  styleUrls: ['./nuevo-tipo-gasto.page.scss'],
})
export class NuevoTipoGastoPage implements OnInit {

  nuevotipogasto = {} as gastos

  constructor(
    private Router: ActivatedRoute,  
    private navCtrl: NavController,
    private loadingControer: LoadingController,
    private gastosService: gastosService,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  nuevo(nuevotipogasto: any){
    this.mostrarMensaje('Guardando..');
    this.gastosService.crearNueva(this.nuevotipogasto).then(()=>{
      this.router.navigateByUrl('tipo-gasto');
      this.mostrarMensaje('gasto registrada con exito!');
    }, err =>{
      this.mostrarMensaje('hubo un error');
    }
  )
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    }).then(toast => toast.present());
  }



}
