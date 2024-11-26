import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Trabajos } from '../trabajos';
import { TipoTrabajoService } from '../services/tipotrabajos.service';

@Component({
  selector: 'app-nuevo-tipo-trabajo',
  templateUrl: './nuevo-tipo-trabajo.page.html',
  styleUrls: ['./nuevo-tipo-trabajo.page.scss'],
})
export class NuevoTipoTrabajoPage implements OnInit {

  nuevoTipoTrabajo={} as Trabajos;

  constructor(
    private Router: ActivatedRoute,  
    private navCtrl: NavController,
    private loadingControer: LoadingController,
    private tipoTrabajoService: TipoTrabajoService,
    private router: Router,
    private toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  nueva(nuevoTipoTrabajo: any){
    this.mostrarMensaje('Guardando..');
    this.tipoTrabajoService.crearNuevo(this.nuevoTipoTrabajo).then(()=>{
      this.router.navigateByUrl('tipo-trabajos');
      this.mostrarMensaje('Tipo de trabajo registrado con exito!');
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
