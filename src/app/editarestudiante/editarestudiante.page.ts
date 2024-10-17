import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Route, ParamMap,Params, Router } from '@angular/router';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-editarestudiante',
  templateUrl: './editarestudiante.page.html',
  styleUrls: ['./editarestudiante.page.scss'],
})
export class EditarestudiantePage implements OnInit {

  


  id:any;
  estudiante?:Estudiantes;
  seleccionado?:Estudiantes;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private toastController: ToastController,
    private navCtrl:NavController,
    private loadCtrl: LoadingController,
    private estudianteService:EstudiantesService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
      this.estudianteService.getUnEstudiante(params['id'])
      .subscribe(seleccionado =>{
        this.seleccionado = seleccionado;
        this.calcularDefinitiva(); // Calcular la definitiva al cargar el estudiante
      });
    });

    

  }

  regresar(): void{
    this.router.navigate([`/tabs/estudiantes`]);
  }

  editar(estudiante:Estudiantes):void{
    //Funcion de guardar los cambios
    this.estudianteService.editarEstudiante(estudiante).subscribe(()=>{
      // this.router.navigate([`/tabs/estudiantes/${this.estudiante?.id_materia}`]);
      this.mostrarMensaje("Registro exitoso!");
      this.regresar();
    });
  }

  mostrarMensaje(mensaje:string){
    this.toastController.create({
      message:mensaje,
      duration:2000
    }).then(toast => toast.present());  
  }

  // Método para calcular la definitiva
  calcularDefinitiva() {
    if (this.seleccionado) {
      const totalParciales = (this.seleccionado.parcial_1*0.35 || 0) + 
                             (this.seleccionado.parcial_2*0.35 || 0) + 
                             (this.seleccionado.parcial_3*0.30 || 0);

      this.seleccionado.definitiva = totalParciales
      // const cantidadParciales = 3; // Cambiar si hay más parciales
      // this.seleccionado.definitiva = totalParciales / cantidadParciales;
    }
  }

    // Método que se llama al cambiar los parciales
    onParcialChange() {
      this.calcularDefinitiva();
    }

}
