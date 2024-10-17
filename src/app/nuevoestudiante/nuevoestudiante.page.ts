import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';
import { subscribeOn } from 'rxjs';
import { __param } from 'tslib';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.page.html',
  styleUrls: ['./nuevoestudiante.page.scss'],
})
export class NuevoestudiantePage implements OnInit {

  nuevoEstudiante = {} as Estudiantes;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudiantesService: EstudiantesService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const idMateria = params.get('id'); // Captura el id de la ruta
      if (idMateria) {
        this.nuevoEstudiante.id_materia = Number(idMateria); // Asigna el id de la materia al nuevo estudiante
        console.log('id_materia capturado:', this.nuevoEstudiante.id_materia); //Se puede eliminar
      } else {
        console.error('No se pudo obtener el id_materia de la ruta');
      }
    });

    this.calcularDefinitiva(); // Call calcularDefinitiva method here

  }

  regresar(): void {
    // Método para regresar a la lista de estudiantes
    this.router.navigate([`/tabs/estudiantes`]);
  }

  async guardar(nuevoEstudiante: Estudiantes) {
    const loading = await this.loadCtrl.create({
      message: 'Guardando...'
    });
    await loading.present();

     // Asegúrate de que el id_materia esté presente
    console.log('id_materia antes de guardar:', this.nuevoEstudiante.id_materia);

    this.nuevoEstudiante.id = Number(this.nuevoEstudiante.id);

    this.estudiantesService.crearNuevoE(nuevoEstudiante).subscribe(
      async estudiante => {
        await loading.dismiss();
        this.router.navigate([`/tabs/estudiantes/${this.nuevoEstudiante.id_materia}`]);
        this.mostrarMensaje("Estudiante registrado!");
      },
      async error => {
        await loading.dismiss();
        this.mostrarMensaje("Error al registrar el estudiante.");
      }
    );
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration:200
    }).then(toast => toast.present());
  }

  // Método para calcular la definitiva
  calcularDefinitiva() {
    if (this.nuevoEstudiante) {
      const totalParciales = (this.nuevoEstudiante.parcial_1*0.35 || 0) + 
                             (this.nuevoEstudiante.parcial_2*0.35 || 0) + 
                             (this.nuevoEstudiante.parcial_3*0.30 || 0);
      
      this.nuevoEstudiante.definitiva = totalParciales;
      // const cantidadParciales = 3; // Cambiar si hay más parciales
      // this.nuevoEstudiante.definitiva = totalParciales / cantidadParciales;
    }
  }

  //   Método que se llama al cambiar los parciales
    onParcialChange() {
      this.calcularDefinitiva();
    }

}
