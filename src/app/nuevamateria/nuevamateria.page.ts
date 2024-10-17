import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materias } from '../materias';
import { MateriasService } from '../services/materias.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-nuevamateria',
  templateUrl: './nuevamateria.page.html',
  styleUrls: ['./nuevamateria.page.scss'],
})
export class NuevamateriaPage implements OnInit {

  nuevaMateria = {} as Materias;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
  }

  //  array para los semestres
  semestres = Array.from({ length: 10 }, (_, i) => i + 1);

  regresar(): void {
    // Método para regresar a la lista de materias
    this.router.navigate(["tabs/Materias"]);
  }

  ionViewDidEnter(){
    this.nuevaMateria ={}as Materias;
  }

  guardar(nuevaMateria: any) {
    this.mostrarMensaje("Guardando...");
    this.nuevaMateria.id = Number(this.nuevaMateria.id);
    this.materiasService.crearNuevo(nuevaMateria).
    subscribe(materia =>{
      this.router.navigate(["tabs/Materias"]);
      this.mostrarMensaje("Materia registrada!");
    })
  }
  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration:200
    }).then(toast => toast.present());
  }
}
