import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Empleados } from '../empleados';
import { EmpleadosService } from '../services/empleados.service';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-nuevoempleado',
  templateUrl: './nuevoempleado.page.html',
  styleUrls: ['./nuevoempleado.page.scss'],
})
export class NuevoempleadoPage implements OnInit {

  nuevoEmpleado = {} as Empleados;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private empleadosService: EmpleadosService
  ) { }

  ngOnInit() {
  }

  // //  array para los semestres
  // semestres = Array.from({ length: 10 }, (_, i) => i + 1);

  regresar(): void {
    // Método para regresar a la lista de materias
    this.router.navigate(["tabs/empleados/:id"]);
  }

  ionViewDidEnter(){
    this.nuevoEmpleado ={}as Empleados;
  }

  guardar(nuevoEmpleado: any) {
    this.mostrarMensaje("Guardando...");
    this.nuevoEmpleado.id = Number(this.nuevoEmpleado.id);
    this.empleadosService.crearNuevo(nuevoEmpleado).
    subscribe(empleados =>{
      this.router.navigate(["tabs/empleados/:id"]);
      this.mostrarMensaje("Empleado registrado!");
    })
  }
  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration:200
    }).then(toast => toast.present());
  }

}
