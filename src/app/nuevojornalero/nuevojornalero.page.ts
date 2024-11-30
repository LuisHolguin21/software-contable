import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { JornaleroData } from '../jornalerodata'; 
import { JornaleroService } from '../services/jornalero.service';

@Component({
  selector: 'app-nuevojornalero',
  templateUrl: './nuevojornalero.page.html',
  styleUrls: ['./nuevojornalero.page.scss'],
})
export class NuevojornaleroPage implements OnInit {

  nuevoJornalero={} as JornaleroData;

  constructor(
    private Router: ActivatedRoute,  
    private navCtrl: NavController,
    private loadingControer: LoadingController,
    private jornaleroService: JornaleroService,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  nueva(nuevoJornalero: any){
    this.mostrarMensaje('Guardando..');
    this.jornaleroService.crearNueva(this.nuevoJornalero).then(()=>{
      this.router.navigateByUrl('jornaleros');
      this.mostrarMensaje('jornalero registrado con exito!');
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
