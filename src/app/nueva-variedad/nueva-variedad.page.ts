import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { VariedadesCafe } from '../variedades-cafe'; 

import { VariedadCafeService } from '../services/variedad-cafe.service';  

@Component({
  selector: 'app-nueva-variedad',
  templateUrl: './nueva-variedad.page.html',
  styleUrls: ['./nueva-variedad.page.scss'],
})
export class NuevaVariedadPage implements OnInit {

  nuevaVariedad={} as VariedadesCafe;

  constructor(
    private Router: ActivatedRoute,  
    private navCtrl: NavController,
    private loadingControer: LoadingController,
    private variedadCafeService: VariedadCafeService,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  nueva(nuevaVariedad: any){
    this.mostrarMensaje('Guardando..');
    this.variedadCafeService.crearNueva(this.nuevaVariedad).then(()=>{
      this.router.navigateByUrl('variedad-coffe');
      this.mostrarMensaje('Contacto registrado con exito!');
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
